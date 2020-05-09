import {DocList} from "./DocList";
import {Students} from "./Students";

export interface Group {

    id: Number,
    students: Students [],
    supervisor: String,
    doneDocs: DocList
}
