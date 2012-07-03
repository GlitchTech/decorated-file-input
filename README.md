Enyo 2.0 Decorated-File-Input
=============================

An Enyo 2 Decorator for the &lt;input type="file"> HTML element, also known in Enyo 2 as {kind:"enyo.Input", type:"file"}

###Published Properties###
    
```
published: {
    // The content of the button
    buttonCaption: "Choose File",

    // The content of the upload note
    uploadNote: "",

	// The style of the upload note
    uploadNoteStyle: "font-weight: bold; font-size: 18px",
    
	// The CSS class of the upload note (may be overkill but oh well!)
    uploadNoteClass: "",
    
	// This is the name of the <input> HtmlElement and thus the
    // $_POST[] key in your PHP script. Set this if you want
    // to wrap your Enyo generated HTML in a <form> for convenience or less JS-oriented web programming.
    // NOTE: if you use FormData as described below, this property is unnecessary
    inputElementName: "",
    
	// The text shown next to the button when no file is chosen
    placeholder: "No file chosen"
},

```

###Functions###
```
// Basically emulates clicking the 'Choose File' button. May or may not need this.
triggerUpload()

// Returns an array of File objects. Returns empty array if no file selected.
// Use this for form validation and for posting to upload, as shown later
getFiles()

// Clears the File objects from the <input>'s File array. Undoes any file choosing
// performed by the user
clearFiles()
```

###Usage###

Using the custom File Input is straightforward:

1. Include it in your components

```
components: [
    ...,
    {kind: "jmtk.FileInput", name: "fileInput"},
	...
]
```