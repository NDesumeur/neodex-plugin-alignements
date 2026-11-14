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
  return 'plein écran ok, deux lignes au clavier, la deuxième en combo ×2 : ' + s.score + ' points';
};
