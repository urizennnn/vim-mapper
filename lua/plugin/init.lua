-- vim.opt.runtimepath:append("C:/Users/Victor/Desktop/vim-mapper")
local setup =require("plugin.utils")


local js = ("./ai/test.js")
local result = setup.eval_js(js)
print(result)
