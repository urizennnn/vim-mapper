-- local ffi = require("ffi")

-- ffi.cdef[[
-- typedef struct duk_hthread duk_context;
-- duk_context *duk_create_heap_default(void);
-- void duk_destroy_heap(duk_context *ctx);
-- void duk_eval_string(duk_context *ctx, const char *src);
-- const char *duk_safe_to_string(duk_context *ctx, int index);

-- ]]

-- local duktape = ffi.load("C:/duktape-2.7.0/src/libduktape.so")

-- local function eval_js(code)
-- 	local ctx = duktape.duk_create_heap_default()

-- 	duktape.duk_eval_string(ctx, code)
-- 	local result = ffi.string(duktape.duk_safe_to_string(ctx, -1))

-- 	duktape.duk_destroy_heap(ctx)
-- 	return result


-- end


-- return {
-- 	eval_js = eval_js
-- }


-- Lua script (example.lua)

-- Read the JavaScript code from the file
local file = io.open("./ai/print.js", "r")
if file then
    local js_code = file:read("*a")
    file:close()

    -- Write the JavaScript code to a temporary file
    local tmp_file = io.open("./ai/tmp_script.js", "w")
    tmp_file:write(js_code)
    tmp_file:close()

    -- Execute the temporary file with Node.js
    local node_command = string.format("node ./ai/tmp_script.js")
    local handle = io.popen(node_command)
    local result = handle:read("*a")
    handle:close()

    print(result)
else
    print("File not found")
end

