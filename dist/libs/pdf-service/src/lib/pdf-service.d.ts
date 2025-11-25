export interface CertificateData {
    companyName: string;
    issuanceDate: string;
    type: string;
    version: string;
    address: string;
    certificateNumber?: string;
    classification?: string;
    validTill?: string;
}
export declare class PdfServiceService {
    private hexToRgb;
    private wrapText;
    private readImageFile;
    modifyExistingCertificate(certificateData: CertificateData, templatePath?: string): Promise<Buffer>;
    private readTemplateFile;
    debugTemplatePositions(templatePath?: string): Promise<void>;
    debugSignaturePosition(templatePath?: string, signaturePath?: string): Promise<void>;
}
