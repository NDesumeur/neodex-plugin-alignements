// lancé par le test « local » de NeoDex : vérification interne, puis deux lignes faites au clavier (flèches + Entrée), la deuxième en combo ×2
module.exports = async ({ pj, sleep }) => {
  const sc = await pj(`document.getElementById('gc').dataset.selfcheck`); if (sc !== 'ok') throw new Error('vérification interne : ' + sc);
  const key = async (k, n = 1) => { for (let i = 0; i < n; i++) { await pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: '${k}', bubbles: true})), 0`); await sleep(40); } };
  const st = () => pj(`document.getElementById('gc').__ag()`);
  await pj(`document.getElementById('gc').__setup(), 0`);
  await key('Enter'); await key('Enter');  // le premier Entrée montre le curseur, le second prend la bille
  if (!(await st()).sel) throw new Error('la bille n’est pas prise au clavier');
  await key('ArrowUp', 8); await key('ArrowRight', 4); await key('Enter'); await sleep(1500);
  let s = await st(); if (s.score !== 10 || s.combo !== 1) throw new Error('première ligne : ' + JSON.stringify(s));
  await key('ArrowDown', 8); await key('ArrowRight', 4); await key('Enter'); await key('ArrowUp', 7); await key('ArrowLeft', 4); const c = (await st()).cur; await key('Enter'); await sleep(1500);
  s = await st(); if (s.score !== 30 || s.combo !== 2) throw new Error('combo : ' + JSON.stringify(s) + ' curseur avant Entrée ' + c);
  await pj(`document.getElementById('gFs').click(), 0`); await sleep(1200);
  const fs = await pj(`(() => { const c = document.getElementById('gc'); return document.fullscreenElement === c.parentElement && Math.abs(c.getBoundingClientRect().height - innerHeight) < 3; })()`);
  await pj(`document.exitFullscreen().then(() => 0)`); await sleep(600); if (!fs) throw new Error('le plein écran ne prend pas tout l’écran');
  { // la zone de jeu tient dans la fenêtre, quelle que soit sa taille
    const L = await pj(`(() => { const c = [...document.querySelectorAll('.gameBox canvas')].filter(c => c.offsetWidth).sort((a, b) => b.offsetWidth - a.offsetWidth)[0], r = c.getBoundingClientRect(); let s = 0; for (let e = c.parentElement; e; e = e.parentElement) s += e.scrollTop; return { top: Math.round(r.top + s), bottom: Math.round(r.bottom + s), h: Math.round(r.height), w: Math.round(r.width), wh: innerHeight, ww: innerWidth, sw: document.documentElement.scrollWidth }; })()`);
    if (process.env.NEO_FIT_LOG) console.log('FIT', JSON.stringify(L));
    if (L.bottom > L.wh + 1 || L.sw > L.ww + 1) throw new Error('la zone de jeu dépasse la fenêtre : ' + JSON.stringify(L));
  }
  return 'plein écran ok, deux lignes au clavier, la deuxième en combo ×2 : ' + s.score + ' points';
};
