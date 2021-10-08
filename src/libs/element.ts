/*
  部分引入Element-Plus
*/

import { ElSelectV2, ElOption, ElTable, ElTableColumn } from 'element-plus'

import { App } from 'vue'

const Element = {
  install(app: App) {
    app.use(ElSelectV2)
    app.use(ElOption)
    app.use(ElTable)
    app.use(ElTableColumn)
  },
}

export default Element
