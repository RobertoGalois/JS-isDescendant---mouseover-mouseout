var balise = window.document.querySelector("div#balise");

function isDescendant(child, parent)
{
	var node = child;
	var ret = false;

	if ((parent != null) && (child != null))
	{
		while ((node != null) && (ret === false))
	    {
	    	if (node === parent) 
				ret = true;

			node = node.parentNode;
	    }		
	}
     
    return (ret);
}

balise.addEventListener("mouseover", function (e) {
	if (!isDescendant(e.relatedTarget, e.currentTarget))
	{
		console.log("j'entre !");
	}
});

balise.addEventListener("mouseout", function (e) {
	if (!isDescendant(e.relatedTarget, e.currentTarget))
	{
		console.log("je sors !");
	}
});
