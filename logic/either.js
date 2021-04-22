class Right {
  constructor (val) {
    this._val = val
  }

  map (fn) {
    return new Right(fn(this._val))
  }

  join () {
    if (this._val instanceof Left ||
        this._val instanceof Right) {
      return this._val
    }
    return this
  }

  chain (fn) {
    return fn(this._val)
  }

  ap (otherEither) {
    return this.map(otherEither._val)
  }

  export () {
    return {
      ok: true,
      result: JSON.stringify(this._val)
    }
  }

  then (fn) {
    return fn(this._val)
  }

  catch () {
    return this
  }
}

class Left {
  constructor (val) {
    this._val = val
  }

  map () {
    return new Left(this._val)
  }

  join () {
    return this
  }

  chain () {
    return this
  }

  ap () {
    return this
  }

  export () {
    return {
      ok: false,
      error: this._val
    }
  }

  then () {
    return this
  }

  catch (fn) {
    if (this instanceof Left) {
      fn(this._val)
      return Error(this._val)
    }
  }
}

const right = (val) => {
  return new Right(val)
}

const left = (val) => {
  return new Left(val)
}

module.exports = {
  right,
  left,
  either: right
}
