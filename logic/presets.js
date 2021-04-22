const presets = {
  simpleCloud: {
    font: 'notosans',
    charScale: 72,
    scaleIndex: 0.8,
    emojiScaleIndex: 1,
    cloudWidth: 400,

    yOffset: 33, // cloud offset
    x: x => x + 60,
    y: (y, rows) => 258 + (60 * y) - (30 * (rows - 1)),

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MINIMAL_OFFSET: 20,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180,
    CLOUD_R_SIDE_OFFSET_CORRECTION: -206,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 425,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 220
  },
  catCloud: {
    font: 'notosans',
    charScale: 72,
    scaleIndex: 0.8,
    emojiScaleIndex: 1,
    cloudWidth: 400,

    yOffset: 33, // cloud offset
    x: x => x + 60,
    y: (y, rows) => 256 + (60 * y) - (30 * (rows - 1)),

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MINIMAL_OFFSET: 20,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180,
    CLOUD_R_SIDE_OFFSET_CORRECTION: -206,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 425,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 220
  },
  sharkCloud: {
    font: 'notosans',
    charScale: 25,
    scaleIndex: 0.65,
    emojiScaleIndex: 1,
    cloudWidth: 300, // cloudWidth for text

    yOffset: 20, // cloud offset ???
    textStartX: 150,
    textStartY: 256,
    x: x => x + 183, // 20 text
    y: (y, rows) => 220 + (40 * y) - (20 * (rows - 1)), // text

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 310,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180, // minimal width
    CLOUD_R_SIDE_OFFSET_CORRECTION: -210,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 310 // cloudWidth for cloud
  },
  menherachanOk: {
    font: 'notosans',
    charScale: 25,
    scaleIndex: 0.6,
    emojiScaleIndex: 0.7, // ???
    cloudWidth: 170, // cloudWidth for text
    maxWidth: 170 - 20,

    yOffset: 20, // cloud offset ???
    textStartX: 150,
    textStartY: 256,

    xOffset: 200,
    x: x => x + 200, // 20 text
    y: (y, rows) => 220 + (25 * y) - (12 * (rows - 1)), // text

    LINE_OFFSET: 12,

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 310,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180, // minimal width
    CLOUD_R_SIDE_OFFSET_CORRECTION: -220,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 310, // cloudWidth for cloud

    prepareLines: lines => lines.slice(0, 5)
  },
  menherachanPlate: {
    font: 'notosans',
    charScale: 23,
    scaleIndex: 0.55,
    emojiScaleIndex: 0.7, // ???
    get cloudWidth () {
      return 140
    }, // cloudWidth for text

    yOffset: 20, // cloud offset ???
    textStartX: 200,
    textStartY: 220,

    maxWidth: 130,

    xOffset: 70,
    x: function (x) {
      return x + 197
    },
    y: function (y, rows) {
      return (this.textStartY + (25 * y) - (12.5 * (rows - 1)))
    },

    LINE_OFFSET: 8,

    XIMAL_OFFSET: 310, // cloudWidth for cloud

    prepareLines: lines => lines.slice(0, 4),
    centralize: true
  },
  keyboard: {
    font: 'notosans',
    charScale: 35,
    scaleIndex: 0.8,
    emojiScaleIndex: 0, // ???
    cloudWidth: 300, // cloudWidth for text
    maxWidth: 250,

    yOffset: 20, // cloud offset ???
    textStartX: 10,
    textStartY: 256,

    xOffset: 100,
    x: x => x, // 20 text
    y: y => y, // text

    LINE_OFFSET: 8,

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 310,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180, // minimal width
    CLOUD_R_SIDE_OFFSET_CORRECTION: -220,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 310, // cloudWidth for cloud

    prepareLines: lines => lines.slice(0, 4),
    centralize: true
  },
  popCat: {
    font: 'notosans',
    charScale: 25,
    scaleIndex: 0.65,
    emojiScaleIndex: 1,
    cloudWidth: 300, // cloudWidth for text

    yOffset: 20, // cloud offset ???
    textStartX: 150,
    textStartY: 256,
    x: x => x + 183, // 20 text
    y: (y, rows) => 220 + (40 * y) - (20 * (rows - 1)), // text

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 310,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180, // minimal width
    CLOUD_R_SIDE_OFFSET_CORRECTION: -210,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 310 // cloudWidth for cloud
  },
  rollingCat: {
    font: 'notosans',
    charScale: 25,
    scaleIndex: 0.65,
    emojiScaleIndex: 1,
    cloudWidth: 300, // cloudWidth for text

    yOffset: 20, // cloud offset ???
    textStartX: 150,
    textStartY: 256,
    x: x => x + 183, // 20 text
    y: (y, rows) => 220 + (40 * y) - (20 * (rows - 1)), // text

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 310,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180, // minimal width
    CLOUD_R_SIDE_OFFSET_CORRECTION: -210,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 310 // cloudWidth for cloud
  },
  telegram: {
    font: 'notosans',
    charScale: 25,
    scaleIndex: 0.65,
    emojiScaleIndex: 1,
    cloudWidth: 300, // cloudWidth for text

    yOffset: 20, // cloud offset ???
    textStartX: 150,
    textStartY: 256,
    x: x => x + 183, // 20 text
    y: (y, rows) => 220 + (40 * y) - (20 * (rows - 1)), // text

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 310,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180, // minimal width
    CLOUD_R_SIDE_OFFSET_CORRECTION: -210,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 310 // cloudWidth for cloud
  },
  component: {
    font: 'notosans',
    charScale: 25,
    scaleIndex: 0.65,
    emojiScaleIndex: 1,
    cloudWidth: 300, // cloudWidth for text

    yOffset: 20, // cloud offset ???
    textStartX: 150,
    textStartY: 256,
    x: x => x + 183, // 20 text
    y: (y, rows) => 220 + (40 * y) - (20 * (rows - 1)), // text

    CLOUD_R_SIDE_MINIMAL_WIDTH: 30,
    CLOUD_R_SIDE_MAXIMAL_WIDTH: 310,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X: -180, // minimal width
    CLOUD_R_SIDE_OFFSET_CORRECTION: -210,
    CLOUD_R_SIDE_MAXIMAL_OFFSET: 310 // cloudWidth for cloud
  }
}

presets.sharkCloudWaves = presets.sharkCloud

module.exports = presets
