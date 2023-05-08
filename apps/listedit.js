import { MonksEnhancedJournal, log, error, i18n, setting, makeid, getVolume } from "../monks-enhanced-journal.js";

export class ListEdit extends FormApplication {
    constructor(object, sheet, options) {
        super(object, options);
        this.sheet = sheet;
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Edit Item",
            classes: ["list-edit"],
            template: "./modules/monks-enhanced-journal/templates/sheets/listitem.html",
            width: 800,
            height: "auto",
            closeOnSubmit: true,
            popOut: true,
        });
    }

    async getData(options) {
        let data = this.object.data;
        data.enrichedText = await TextEditor.enrichHTML(data.text, {
            relativeTo: this.object,
            secrets: this.sheet.object.isOwner,
            async: true
        });
        const folders = this.sheet.folders;
        return {
            data: data,
            name: data.name || game.i18n.format("DOCUMENT.New", { type: options.type }),
            folder: data.folder,
            folders: folders,
            hasFolders: folders.length > 0,
            hasNumber: this.sheet.hasNumbers
        }
    }

    _updateObject(event, formData) {
        let data = expandObject(formData);

        
    }
}