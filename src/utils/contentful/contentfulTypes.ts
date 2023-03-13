import { EntryFields, Asset, Entry } from 'contentful'

export type AspirationType = {
    from?: EntryFields.Text
    message: EntryFields.Text
    subject: EntryFields.Text
    to: EntryFields.Text
    files?: Asset[]
}

export type NewsType = {
    title: EntryFields.Text,
    date?: EntryFields.Date,
    image: Asset[],
    desc: EntryFields.RichText,
}