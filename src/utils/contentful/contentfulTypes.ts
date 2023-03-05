import { EntryFields, Asset } from 'contentful'

export type AspirationType = {
    from?: EntryFields.Text
    message: EntryFields.Text
    subject: EntryFields.Text
    to: EntryFields.Text
    files?: Asset[]
}