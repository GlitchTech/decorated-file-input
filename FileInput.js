enyo.kind({
	name: "jmtk.FileInput",
	style: "padding: 5px;",
	
	events: {
		onFileSelected: ""
	},

	published: {
		buttonCaption: "Choose File",
		uploadNote: "",
		uploadNoteStyle: "font-weight: bold; font-size: 18px",
		uploadNoteClass: "",
		inputElementName: "",
		placeholder: "No file chosen"
	},

	components: [
		{kind: "enyo.Input", name: "fileInput", type: "file", style: "position: absolute; visibility: hidden;", onchange: "fileSelected"},	
		{
			kind:"enyo.ToolDecorator",
			components: [
				{
					kind: "onyx.Button", content: "", name: "selectFileButton",
					ontap: "triggerUpload", style: "margin-right: 10px;"
				},
				{name: "fileName", content: ""}
			]
		},
		{name: "uploadNote", content: ""}
	],

	create: function() {
		this.inherited(arguments);
		this.buttonCaptionChanged();
		this.uploadNoteChanged();
		this.uploadNoteStyleChanged();
		this.uploadNoteClassChanged();
		this.inputElementNameChanged();
		this.placeholderChanged();
	},

	triggerUpload: function() {
		var node = this.$.fileInput.hasNode();
		if ( node ) {
			node.click();
		}
	},

	getFiles: function() {
		var files = [];
		var node = this.$.fileInput.hasNode();
		if ( node ) {
			files = node.files;
		}
		return files;
	},

	clearFile: function() {
		this.$.fileInput.setValue("");
		this.fileSelected( this.$.fileInput );
	},
	
	//* @protected
	fileSelected: function( inSender ) {
		var fileName = inSender.getValue().replace("C:\\fakepath\\", "");
		if ( !fileName.length ) {
			this.$.fileName.setContent(this.placeholder);
			fileName = null;
		}
		else {
			this.$.fileName.setContent(fileName);
		}

		this.doFileSelected({fileName: fileName});
	},

	buttonCaptionChanged: function() {
		this.$.selectFileButton.setContent(this.buttonCaption);
	},

	uploadNoteChanged: function() {
		this.$.uploadNote.setContent(this.uploadNote);
	},

	uploadNoteStyleChanged: function() {
		this.$.uploadNote.addStyles(this.uploadNoteStyle);
	},

	uploadNoteClassChanged: function() {
		this.$.uploadNote.addClass(this.uploadNoteClass);
	},

	inputElementNameChanged: function() {
		this.$.fileInput.setAttribute("name", this.inputElementName);
	},

	placeholderChanged: function( inOldValue ) {
		if ( !inOldValue || this.$.fileName.getContent() == inOldValue ) {
			this.$.fileName.setContent( this.placeholder );
		}
	}

});
