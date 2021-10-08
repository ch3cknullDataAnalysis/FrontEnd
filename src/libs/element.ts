/*
  部分引入Element-Plus
*/

import { ElSelect, ElOption, ElTable, ElTableColumn } from 'element-plus'

import { App } from 'vue'

const Element = {
  install(app: App) {
    app.use(ElSelect)
    app.use(ElOption)
    app.use(ElTable)
    app.use(ElTableColumn)
  },
}

export default Element
