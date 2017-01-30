const regExp = /\.(js|jsx)$/i

export default function () {
  return {
    visitor: {
      ImportDeclaration (path) {
        const { source } = path.node
        if (!source.value.match(regExp)) {
          return
        }
        source.value = source.value.replace(regExp, '')
      },
      ExportNamedDeclaration (path) {
        const { source } = path.node
        if(source) {
          if (!source.value.match(regExp)) {
            return
          }
          source.value = source.value.replace(regExp, '')
        }
      },
      ExportAllDeclaration (path) {
        const { source } = path.node
        if(source) {
          if (!source.value.match(regExp)) {
            return
          }
          source.value = source.value.replace(regExp, '')
        }
      }
    }
  }
}
