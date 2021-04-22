// currentOffset, row, rowsTotal, ping, -1, settings.scaleIndex
const defaultAnimation = ({ x: posX, y: posY, rowsTotal, ping, hz, scaleIndex = 1 }) => ({
  ks: {
    o: {
      a: 1,
      k: [
        {
          i: {
            x: [
              0.833
            ],
            y: [
              0.833
            ]
          },
          o: {
            x: [
              0.167
            ],
            y: [
              0.167
            ]
          },
          t: ping * 20,
          s: [
            0
          ]
        },
        {
          i: {
            x: [
              0.833
            ],
            y: [
              0.833
            ]
          },
          o: {
            x: [
              0.167
            ],
            y: [
              0.167
            ]
          },
          t: 10 + ping * 20,
          s: [
            0
          ]
        },
        {
          i: {
            x: [
              0.833
            ],
            y: [
              0.833
            ]
          },
          o: {
            x: [
              0.167
            ],
            y: [
              0.167
            ]
          },
          t: 22 + ping * 20,
          s: [
            100
          ]
        },
        {
          t: 90,
          s: [
            100
          ]
        }
      ]
    },
    r: {
      a: 0,
      k: 0
    },
    p: {
      a: 1,
      k: [
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 0,
          s: [
            posX + 100,
            posY,
            25
          ]
        },
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 12,
          s: [
            posX,
            posY,
            25
          ]
        },
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 18,
          s: [
            posX - 12,
            posY,
            0
          ]
        },
        {
          t: 24,
          s: [
            posX - 7,
            posY,
            0
          ]
        }
      ]
    },
    a: {
      a: 0,
      k: [
        0,
        0,
        0
      ]
    },
    s: {
      a: 1,
      k: [
        {
          i: {
            x: [
              0.833,
              0.833,
              0.833
            ],
            y: [
              0.833,
              0.833,
              0.833
            ]
          },
          o: {
            x: [
              0.167,
              0.167,
              0.167
            ],
            y: [
              0.167,
              0.167,
              0.167
            ]
          },
          t: ping * 10,
          s: [
            20 * scaleIndex,
            20 * scaleIndex,
            100 * scaleIndex
          ]
        },
        {
          i: {
            x: [
              0.667,
              0.667,
              0.667
            ],
            y: [
              1,
              1,
              1
            ]
          },
          o: {
            x: [
              0.167,
              0.167,
              0.167
            ],
            y: [
              0.167,
              0.167,
              1.333
            ]
          },
          t: 15 + ping * 10,
          s: [
            100 * scaleIndex,
            100 * scaleIndex,
            100 * scaleIndex
          ]
        },
        {
          i: {
            x: [
              0.833,
              0.833,
              0.833
            ],
            y: [
              0.833,
              0.833,
              3.848
            ]
          },
          o: {
            x: [
              0.333,
              0.333,
              0.333
            ],
            y: [
              0,
              0,
              0
            ]
          },
          t: 21 + ping * 10,
          s: [
            107.5 * scaleIndex,
            107.5 * scaleIndex,
            100 * scaleIndex
          ]
        },
        {
          t: 25 + ping * 10,
          s: [
            100 * scaleIndex,
            100 * scaleIndex,
            100 * scaleIndex
          ]
        }
      ]
    }
  }
})

// //////////////////////////////////////////////////////////////////////////

const sharkSlideAnimation = defaultAnimation

const withoutAnimation = (x, y, ping, scaleIndex = 1) => ({
  o: {
    a: 1,
    k: [
      {
        i: {
          x: [
            0.833
          ],
          y: [
            0.833
          ]
        },
        o: {
          x: [
            0.167
          ],
          y: [
            0.167
          ]
        },
        t: 0,
        s: [
          100
        ]
      },
      {
        t: 0,
        s: [
          100
        ]
      }
    ]
  },
  r: {
    a: 0,
    k: 0
  },
  p: {
    a: 1,
    k: [
      {
        i: {
          x: 0.833,
          y: 0.833
        },
        o: {
          x: 0.167,
          y: 0.167
        },
        t: 1,
        s: [
          60 + x,
          256 + (70 * y),
          0
        ]
      },
      {
        t: 90,
        s: [
          60 + x,
          256 + (70 * y),
          0
        ]
      }
    ]
  },
  a: {
    a: 0,
    k: [
      0,
      0,
      0
    ]
  },
  s: {
    a: 1,
    k: [
      {
        i: {
          x: [
            0.833,
            0.833,
            0.833
          ],
          y: [
            0.833,
            0.833,
            3.848
          ]
        },
        o: {
          x: [
            0.333,
            0.333,
            0.333
          ],
          y: [
            0,
            0,
            0
          ]
        },
        t: 1,
        s: [
          100 * scaleIndex,
          100 * scaleIndex,
          100 * scaleIndex
        ]
      },
      {
        t: 90,
        s: [
          100 * scaleIndex,
          100 * scaleIndex,
          100 * scaleIndex
        ]
      }
    ]
  }
})

const menheraOkAnimation = ({ x: posX, y: posY, rowsTotal, ping, hz, scaleIndex, currentRow, LINE_OFFSET, xOffset }) => ({
  ks: {
    o: {
      a: 1,
      k: [
        {
          i: {
            x: [
              0.833
            ],
            y: [
              0.833
            ]
          },
          o: {
            x: [
              0.167
            ],
            y: [
              0.167
            ]
          },
          t: 27,
          s: [
            59
          ]
        },
        {
          t: 28,
          s: [
            100
          ]
        }
      ]
    },
    r: {
      a: 1,
      k: [
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 25,
          s: [
            -21
          ]
        },
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 27,
          s: [
            -21
          ]
        },
        {
          t: 28,
          s: [
            -23
          ]
        }
      ]
    },
    p: {
      a: 1,
      k: [
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 25,
          s: [
            posX + currentRow * LINE_OFFSET - (posX - xOffset) * 0.5 + (rowsTotal * -2),
            posY + 170 - posX * 0.26,
            25
          ]
        },
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 27,
          s: [
            posX + currentRow * LINE_OFFSET - (posX - xOffset) * 0.5 + (rowsTotal * -2),
            posY + 170 - posX * 0.26,
            25
          ]
        },
        {
          t: 28,
          s: [
            posX + -85 + currentRow * LINE_OFFSET + (rowsTotal * -7.5),
            posY + 220 - posX * 0.38,
            0
          ]
        }
      ]
    },
    a: {
      a: 0,
      k: [
        0,
        0,
        0
      ]
    },
    s: {
      a: 1,
      // { // idea: 25-28 вылезает, нужен эффект или менять position + s.width
      k: [
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 27,
          s: [
            40 * scaleIndex,
            90 * scaleIndex,
            100
          ]
        },
        {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 27,
          s: [
            40 * scaleIndex,
            90 * scaleIndex,
            100
          ]
        },
        {
          t: 28,
          s: [
            100 * scaleIndex,
            100 * scaleIndex,
            100
          ]
        }
      ]
    }
  },
  ef: [
    {
      ty: 5,
      nm: 'Basic 3D',
      np: 7,
      mn: 'ADBE Basic 3D',
      ix: 1,
      en: 1,
      ef: [
        {
          ty: 0,
          nm: 'Swivel',
          mn: 'ADBE Basic 3D-0001',
          ix: 1,
          v: {
            a: 0,
            k: 0
          }
        },
        {
          ty: 0,
          nm: 'Tilt',
          mn: 'ADBE Basic 3D-0002',
          ix: 2,
          v: {
            a: 0,
            k: 0
          }
        },
        {
          ty: 0,
          nm: 'Distance to Image',
          mn: 'ADBE Basic 3D-0003',
          ix: 3,
          v: {
            a: 0,
            k: 0
          }
        },
        {
          ty: 7,
          nm: 'Specular Highlight',
          mn: 'ADBE Basic 3D-0004',
          ix: 4,
          v: {
            a: 0,
            k: 0
          }
        },
        {
          ty: 7,
          nm: 'Preview',
          mn: 'ADBE Basic 3D-0005',
          ix: 5,
          v: {
            a: 0,
            k: 0
          }
        }
      ]
    }
  ],
  ip: 25 // start show layer
})

const menherachanPlateAnimation = ({ x: posX, y: posY, rowsTotal, ping, hz, scaleIndex, currentRow, LINE_OFFSET, xOffset }) => ({
  ks: {
    o: {
      a: 1,
      k: [
        {
          i: {
            x: [
              0.833
            ],
            y: [
              0.833
            ]
          },
          o: {
            x: [
              0.167
            ],
            y: [
              0.167
            ]
          },
          t: 27,
          s: [
            59
          ]
        },
        {
          t: 28,
          s: [
            100
          ]
        }
      ]
    },
    r: {
      a: 0,
      k: -13
    },
    p: {
      a: 1,
      k: [
        posX + -85 + currentRow * LINE_OFFSET + (rowsTotal * -7.5),
        posY + 100 - posX * 0.27,
        0
      ]
    },
    a: {
      a: 0,
      k: [
        0,
        0,
        0
      ]
    },
    s: {
      a: 0,
      // { // idea: 25-28 вылезает, нужен эффект или менять position + s.width
      k: [
        100 * scaleIndex,
        100 * scaleIndex,
        100
      ]
    }
  },
  ip: 24 // start show layer
})

const keyboardAnimation = ({ x: posX, y: posY, rowsTotal, ping, hz, scaleIndex, currentRow, LINE_OFFSET, xOffset }) => {
  posX = (75 + posX * 1.3 + (Math.random() + 0.3) * 30)
  posX = posY % 2 === 0 ? posX : posX
  posY = 170 * ping + (Math.random() + 0.3) * 100 - 30 + 200
  // if (posX < 40) { posX + Math.random() * 10 * 4 }
  return {
    ks: {
      o: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            t: ping * 20,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            t: 8 + ping * 20,
            s: [
              100
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            t: 68 + ping * 20,
            s: [
              100
            ]
          },
          {
            t: 90,
            s: [
              0
            ]
          }
        ]
      },
      r: {
        a: 0,
        k: 0
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 0,
            s: [
              posX - Math.random() * 10,
              posY,
              0
            ]
          },
          // {
          //   i: {
          //     x: 0.833,
          //     y: 0.833
          //   },
          //   o: {
          //     x: 0.167,
          //     y: 0.167
          //   },
          //   t: 45 + Math.random() * 20 - 10 ,
          //   s: [
          //     posX + Math.random() * 10,
          //     posY * 0.5,
          //     0
          //   ]
          // },
          {
            t: 90,
            s: [
              posX,
              posY - 250,
              0
            ]
          }
        ]
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ]
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ]
      }
    }
  }
}

const animations = {
  defaultAnimation,
  sharkSlideAnimation,
  withoutAnimation,
  menheraOkAnimation,
  menherachanPlateAnimation,
  keyboardAnimation
}

module.exports = (type) => animations[type] ? animations[type] : animations.defaultAnimation
