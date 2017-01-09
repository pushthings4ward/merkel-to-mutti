walk(document.body);

document.title = replaceText(document.title);

function walk(node)
{
	// I copied this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{


	// Remove and Replace
	
	
	//v = v.replace(/\bGrexit\b/g, "die Heldenreise");
	
	
	v = v.replace(/\bAngela Merkel\b/ig, " Mutti ");
	v = v.replace(/\bMerkel\b/ig, " Mutti ");
	#v = v.replace(/\sMerkels\s/ig, " Muttis ");
	

	

	return v;
}

