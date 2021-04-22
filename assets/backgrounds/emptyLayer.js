module.exports = ({ id = 'component', rows = 0, scale = 30, xOffsetLayer = 0, yOffsetLayer = 0, ip = 0, op = 90, st = 0 }) => {
  return [
    {
      ddd: 0,
      refId: id,
      ind: 1,
      ty: 0,
      nm: id,
      sr: 1,
      ks: {
        // o: {
        //   a: 0,
        //   k: 100,
        //   ix: 11
        // },
        // r: {
        //   a: 0,
        //   k: 0,
        //   ix: 10
        // },
        p: {
          a: 0,
          k: [
            125 + xOffsetLayer,
            310 + rows * 18 + yOffsetLayer,
            0
          ],
          ix: 2,
          l: 2
        },
        // a: {
        //   a: 0,
        //   k: [
        //     256,
        //     256,
        //     0
        //   ],
        //   ix: 1,
        //   l: 2
        // },
        s: {
          a: 0,
          k: [
            scale,
            scale,
            100
          ],
          ix: 6,
          l: 2
        }
      },
      ao: 0,
      w: 512,
      h: 512,
      ip,
      op,
      st,
      bm: 0
    }
  ]
}
