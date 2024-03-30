import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, 
});



export async function createVimMap(){
const msg = await anthropic.messages.create({
  model: "claude-3-opus-20240229",
  max_tokens: 2000,
  system:"You are to generate vim keymap functions from a list of plain english sentences decipher these sentences and return the generated functions neatly formatted.For example, set leader to space key should return the following function: vim.g.mapleader = ' '. And then you would add  a line break and read the next command and generate the next function for example, in normal mode,x should be replaced with y should return the following function: vim.keymap.set('n', 'x', 'y', { noremap = true }). and so on.
and in the case of an error briefly describe such error and terminate the process entirely.",
  messages: [{ role: "user", content: "Your functions are sucessfully returned." }],
});
console.log(msg);
}
