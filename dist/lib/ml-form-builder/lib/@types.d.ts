export interface TFile {
    name: string;
    type: string;
    size: string | number;
    base64?: string | ArrayBuffer | null;
    file: File;
}
