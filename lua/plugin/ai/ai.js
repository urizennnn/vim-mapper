"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVimMap = void 0;
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
const anthropic = new sdk_1.default({
    apiKey: process.env.ANTHROPIC_API_KEY,
});
function createVimMap() {
    return __awaiter(this, void 0, void 0, function* () {
        const msg = yield anthropic.messages.create({
            model: "claude-3-opus-20240229",
            max_tokens: 2000,
            system: `You are to generate vim keymap functions from a list of plain english sentences decipher these sentences and return the generated functions neatly formatted. For example, set leader to space key should return the following function: vim.g.mapleader = ' '. And then you would add a line break and read the next command and generate the next function for example, in normal mode, x should be replaced with y should return the following function: vim.keymap.set('n', 'x', 'y', { noremap = true }). and so on. And in the case of an error, briefly describe such error and terminate the process entirely.`,
            messages: [{ role: "user", content: "Your functions are successfully returned." }],
        });
        console.log(msg);
    });
}
exports.createVimMap = createVimMap;
