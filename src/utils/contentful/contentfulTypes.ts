import { EntryFields, Asset, Entry } from 'contentful'

export type AspirationType = {
    from?: string
    message: string
    subject: string
    to: string
}

export type NewsType = {
    title: EntryFields.Text,
    date?: EntryFields.Date,
    image: Asset[],
    desc: EntryFields.RichText,
}