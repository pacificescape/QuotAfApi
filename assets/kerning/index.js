module.exports = paire => {
  let x = 0

  if (kerning[0].includes(paire[0] + paire[1])) x -= 7
  if (kerning[1].includes(paire[0] + paire[0 + 1])) x -= 2
  if (kerning[2].includes(paire[0 + 1])) x += 3
  if (kerning[3].includes(paire[0])) x += 3
  if (kerning[4].includes(paire[0] + paire[1])) x -= 4
  if (kerning[5].includes(paire[0] + paire[1])) x -= 5

  return x
}

const kerning = []

kerning[0] = // -7
  `
    -A A-
    Aa
    AT AY AO AQ AV AW XO OX YO OY Yo oY aY Ya bY Yc cY Ys
    Yd Yq qY wY Yw eY Ye rY Yr tY Yt yY Yy uY Yu iY Yi fY
    Yf gY Yg A1 A4 A A6 A7 A8 A9 A0 OA WA VA PA FA AG JA
    AS SA AC CA DA YA UA AU AQ BA Ad Ac Ag bA fA rA At yA
    oA Ao pA Ae vA Av wA Aw Xo Xc Xa Xd Xv Xw Xa xo xa xc
    ax ox px xd bx bX xe ex Xe eX OV VO Vo oV wo ow Wo oW
    WO OW ew we We eW Ve eV pv PV pV pW ev eV ov OV oV Ov


    OT TO
    to To oT

    -А А-
    Аа
    aж аЖ
    бХ БХ
    вЖ вХ вх
    Га ГА гА га Гб Гв ГД Гд гд гД ге Ге
    еж еЖ
    ёж ёЖ
    жа Жа
    же Же Жо жо ЖО Жф ЖФ
    Жу
    зх зХ
    и
    й
    ка Ка КА кА
    КС Кс кС кс ко КО Ко кО кз КЗ кЗ Кз КЭ кэ Кэ кЭ КФ Кф кф кФ
    л
    м
    н
    ож ОЖ оЖ ол ОЛ оЛ Ол ОА оА оХ ох ОХ
    п
    РЖ рЖ рх
    СХ
    тл ТЛ тЛ Тл
    Ув Уа УА уа уо УО УЭ уэ Уэ уЭ уя Уя УЯ уЯ уф УФ Уф
    уд УД ус УС Ус Уд Ук уе УЕ Уе
    фЖ ФЖ фУ фу Фу ФУ фх фХ ФХ
    х ХС хс Хс ХО хо ХО Хо Хф хф ху ХУ Ху хУ
    ц
    ш
    щ
    ъ
    ы
    ьх
    э
    ЮЛ Юл юЛ ЮТ ют ЮЖ юЖ юж
    я
    `
kerning[1] = 'jJXVv' // -2
kerning[2] = 'iIlL' // +3
kerning[3] = 'iIlLjJ' // +3
kerning[4] = // -4
`
  ot
`
kerning[5] = // -5
`
  fu
  yo
`
