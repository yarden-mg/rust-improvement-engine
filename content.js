const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

let textNode = walker.nextNode();

while (textNode) {
  textNode.nodeValue = textNode.nodeValue.replaceAll("Rust", "Blazing Fast");
  textNode = walker.nextNode();
}
