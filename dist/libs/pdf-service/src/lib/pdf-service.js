"use strict";
// import { Injectable } from '@nestjs/common';
// import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// import * as fs from 'fs';
// import * as path from 'path';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfServiceService = void 0;
const tslib_1 = require("tslib");
// export interface CertificateData {
//   companyName: string;
//   issuanceDate: string;
//   type: string;
//   version: string;
//   address: string;
//   certificateNumber?: string;
//   classification?: string;
//   validTill?: string;
// }
// @Injectable()
// export class PdfServiceService {
//   async modifyExistingCertificate(
//     certificateData: CertificateData,
//     templatePath: string = 'Sample1.pdf'
//   ): Promise<Buffer> {
//     try {
//       // Read the existing PDF template
//       const templateBuffer = await this.readTemplateFile(templatePath);
//       // Convert Buffer to Uint8Array
//       const uint8Array = new Uint8Array(templateBuffer);
//       // Load the existing PDF
//       const pdfDoc = await PDFDocument.load(uint8Array);
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       // Load fonts
//       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//       // Define text positions (you may need to adjust these coordinates)
//       const textPositions = {
//         companyName: { x: 45, y: 232, size: 20 },
//         issuanceDate: { x: 60, y: 70, size: 10 },
//         type: { x: 45, y: 210, size: 10 },
//         version: { x: 45, y: 190, size: 10 },
//         address: { x: 45, y: 170, size: 10 },
//         certificateNumber: { x: 604, y: 350, size: 10 },
//         classification: { x: 604, y: 283, size: 10 },
//         validTill: { x: 604, y: 220, size: 10 }
//       };
//       // Add company name (below "This PCI DSS Compliance certificate is proudly awarded to")
//       firstPage.drawText(certificateData.companyName, {
//         x: textPositions.companyName.x,
//         y: textPositions.companyName.y,
//         size: textPositions.companyName.size,
//         font: helveticaBold,
//         color: rgb(0, 0, 0),
//       });
//       // Add issuance details
//       firstPage.drawText(certificateData.issuanceDate, {
//         x: textPositions.issuanceDate.x,
//         y: textPositions.issuanceDate.y,
//         size: textPositions.issuanceDate.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.type, {
//         x: textPositions.type.x,
//         y: textPositions.type.y,
//         size: textPositions.type.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.version, {
//         x: textPositions.version.x,
//         y: textPositions.version.y,
//         size: textPositions.version.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.address, {
//         x: textPositions.address.x,
//         y: textPositions.address.y,
//         size: textPositions.address.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       if (certificateData.certificateNumber) {
//         firstPage.drawText(certificateData.certificateNumber, {
//           x: textPositions.certificateNumber.x,
//           y: textPositions.certificateNumber.y,
//           size: textPositions.certificateNumber.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.classification) {
//         firstPage.drawText(certificateData.classification, {
//           x: textPositions.classification.x,
//           y: textPositions.classification.y,
//           size: textPositions.classification.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.validTill) {
//         firstPage.drawText(certificateData.validTill, {
//           x: textPositions.validTill.x,
//           y: textPositions.validTill.y,
//           size: textPositions.validTill.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       // Serialize the PDF
//       const pdfBytes = await pdfDoc.save();
//       return Buffer.from(pdfBytes);
//     } catch (error) {
//       throw new Error(`Failed to modify existing certificate: ${error.message}`);
//     }
//   }
//   private async readTemplateFile(templateName: string): Promise<Buffer> {
//     try {
//       // Adjust the path based on your project structure
//       const templatePath = path.join(
//         process.cwd(),
//         'apps',
//         'auth',
//         'src',
//         'assets',
//         'certificates',
//         templateName
//       );
//       // Check if file exists
//       if (!fs.existsSync(templatePath)) {
//         throw new Error(`Template file not found: ${templatePath}`);
//       }
//       // Read the file
//       return fs.readFileSync(templatePath);
//     } catch (error) {
//       throw new Error(`Error reading template file: ${error.message}`);
//     }
//   }
//   // Helper method to find text positions (you can use this to debug coordinates)
//   async debugTemplatePositions(templatePath: string = 'Sample1.pdf'): Promise<void> {
//     const templateBuffer = await this.readTemplateFile(templatePath);
//     const uint8Array = new Uint8Array(templateBuffer);
//     const pdfDoc = await PDFDocument.load(uint8Array);
//     console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
//     const firstPage = pdfDoc.getPages()[0];
//     const { width, height } = firstPage.getSize();
//     console.log('Page dimensions:', { width, height });
//     console.log('Use these coordinates to position your text:');
//     console.log('Top left: (0, 0)');
//     console.log('Top right: (' + width + ', 0)');
//     console.log('Bottom left: (0, ' + height + ')');
//     console.log('Bottom right: (' + width + ', ' + height + ')');
//   }
// }
// import { Injectable } from '@nestjs/common';
// import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// import * as fs from 'fs';
// import * as path from 'path';
// export interface CertificateData {
//   companyName: string;
//   issuanceDate: string;
//   type: string;
//   version: string;
//   address: string;
//   certificateNumber?: string;
//   classification?: string;
//   validTill?: string;
// }
// @Injectable()
// export class PdfServiceService {
//   // Helper method to convert hex color to RGB
//   private hexToRgb(hex: string): { r: number; g: number; b: number } {
//     // Remove the # if present
//     hex = hex.replace(/^#/, '');
//     // Parse the hex values
//     const bigint = parseInt(hex, 16);
//     const r = ((bigint >> 16) & 255) / 255;
//     const g = ((bigint >> 8) & 255) / 255;
//     const b = (bigint & 255) / 255;
//     return { r, g, b };
//   }
//   async modifyExistingCertificate(
//     certificateData: CertificateData,
//     templatePath: string = 'Sample1.pdf'
//   ): Promise<Buffer> {
//     try {
//       // Read the existing PDF template
//       const templateBuffer = await this.readTemplateFile(templatePath);
//       // Convert Buffer to Uint8Array
//       const uint8Array = new Uint8Array(templateBuffer);
//       // Load the existing PDF
//       const pdfDoc = await PDFDocument.load(uint8Array);
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       // Load fonts
//       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//       // Convert hex color to RGB
//       const companyNameColor = this.hexToRgb('#3964fe');
//       // Define text positions (you may need to adjust these coordinates)
//       const textPositions = {
//         companyName: { x: 45, y: 232, size: 20 },
//         issuanceDate: { x: 60, y: 70, size: 10 },
//         type: { x: 45, y: 210, size: 10 },
//         version: { x: 45, y: 190, size: 10 },
//         address: { x: 45, y: 170, size: 10 },
//         certificateNumber: { x: 604, y: 350, size: 10 },
//         classification: { x: 604, y: 283, size: 10 },
//         validTill: { x: 604, y: 220, size: 10 }
//       };
//       // Add company name with custom color #3964fe
//       firstPage.drawText(certificateData.companyName, {
//         x: textPositions.companyName.x,
//         y: textPositions.companyName.y,
//         size: textPositions.companyName.size,
//         font: helveticaBold,
//         color: rgb(companyNameColor.r, companyNameColor.g, companyNameColor.b),
//       });
//       // Add issuance details (keep other text in black)
//       firstPage.drawText(certificateData.issuanceDate, {
//         x: textPositions.issuanceDate.x,
//         y: textPositions.issuanceDate.y,
//         size: textPositions.issuanceDate.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       firstPage.drawText(certificateData.type, {
//         x: textPositions.type.x,
//         y: textPositions.type.y,
//         size: textPositions.type.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       firstPage.drawText(certificateData.version, {
//         x: textPositions.version.x,
//         y: textPositions.version.y,
//         size: textPositions.version.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       firstPage.drawText(certificateData.address, {
//         x: textPositions.address.x,
//         y: textPositions.address.y,
//         size: textPositions.address.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0), // Black color
//       });
//       if (certificateData.certificateNumber) {
//         firstPage.drawText(certificateData.certificateNumber, {
//           x: textPositions.certificateNumber.x,
//           y: textPositions.certificateNumber.y,
//           size: textPositions.certificateNumber.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0), // Black color
//         });
//       }
//       if (certificateData.classification) {
//         firstPage.drawText(certificateData.classification, {
//           x: textPositions.classification.x,
//           y: textPositions.classification.y,
//           size: textPositions.classification.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0), // Black color
//         });
//       }
//       if (certificateData.validTill) {
//         firstPage.drawText(certificateData.validTill, {
//           x: textPositions.validTill.x,
//           y: textPositions.validTill.y,
//           size: textPositions.validTill.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0), // Black color
//         });
//       }
//       // Serialize the PDF
//       const pdfBytes = await pdfDoc.save();
//       return Buffer.from(pdfBytes);
//     } catch (error) {
//       throw new Error(`Failed to modify existing certificate: ${error.message}`);
//     }
//   }
//   private async readTemplateFile(templateName: string): Promise<Buffer> {
//     try {
//       // Adjust the path based on your project structure
//       const templatePath = path.join(
//         process.cwd(),
//         'apps',
//         'auth',
//         'src',
//         'assets',
//         'certificates',
//         templateName
//       );
//       // Check if file exists
//       if (!fs.existsSync(templatePath)) {
//         throw new Error(`Template file not found: ${templatePath}`);
//       }
//       // Read the file
//       return fs.readFileSync(templatePath);
//     } catch (error) {
//       throw new Error(`Error reading template file: ${error.message}`);
//     }
//   }
//   // Helper method to find text positions (you can use this to debug coordinates)
//   async debugTemplatePositions(templatePath: string = 'Sample1.pdf'): Promise<void> {
//     const templateBuffer = await this.readTemplateFile(templatePath);
//     const uint8Array = new Uint8Array(templateBuffer);
//     const pdfDoc = await PDFDocument.load(uint8Array);
//     console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
//     const firstPage = pdfDoc.getPages()[0];
//     const { width, height } = firstPage.getSize();
//     console.log('Page dimensions:', { width, height });
//     console.log('Use these coordinates to position your text:');
//     console.log('Top left: (0, 0)');
//     console.log('Top right: (' + width + ', 0)');
//     console.log('Bottom left: (0, ' + height + ')');
//     console.log('Bottom right: (' + width + ', ' + height + ')');
//   }
// }
// import { Injectable } from '@nestjs/common';
// import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
// import * as fs from 'fs';
// import * as path from 'path';
// export interface CertificateData {
//   companyName: string;
//   issuanceDate: string;
//   type: string;
//   version: string;
//   address: string;
//   certificateNumber?: string;
//   classification?: string;
//   validTill?: string;
// }
// @Injectable()
// export class PdfServiceService {
//   // Helper method to convert hex color to RGB
//   private hexToRgb(hex: string): { r: number; g: number; b: number } {
//     hex = hex.replace(/^#/, '');
//     const bigint = parseInt(hex, 16);
//     const r = ((bigint >> 16) & 255) / 255;
//     const g = ((bigint >> 8) & 255) / 255;
//     const b = (bigint & 255) / 255;
//     return { r, g, b };
//   }
//   // Helper method to wrap text based on maximum width
//   private wrapText(
//     text: string, 
//     font: any, 
//     fontSize: number, 
//     maxWidth: number
//   ): string[] {
//     const lines: string[] = [];
//     const words = text.split(' ');
//     let currentLine = words[0];
//     for (let i = 1; i < words.length; i++) {
//       const word = words[i];
//       const testLine = currentLine + ' ' + word;
//       const testWidth = font.widthOfTextAtSize(testLine, fontSize);
//       if (testWidth <= maxWidth) {
//         currentLine = testLine;
//       } else {
//         lines.push(currentLine);
//         currentLine = word;
//       }
//     }
//     lines.push(currentLine);
//     return lines;
//   }
//   // Helper method to calculate text width
//   private getTextWidth(text: string, font: any, fontSize: number): number {
//     return font.widthOfTextAtSize(text, fontSize);
//   }
//   async modifyExistingCertificate(
//     certificateData: CertificateData,
//     templatePath: string = 'Sample1.pdf'
//   ): Promise<Buffer> {
//     try {
//       // Read the existing PDF template
//       const templateBuffer = await this.readTemplateFile(templatePath);
//       // Convert Buffer to Uint8Array
//       const uint8Array = new Uint8Array(templateBuffer);
//       // Load the existing PDF
//       const pdfDoc = await PDFDocument.load(uint8Array);
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       // Load fonts
//       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//       // Convert hex color to RGB
//       const companyNameColor = this.hexToRgb('#3964fe');
//       // Define text positions with max widths for wrapping
//       const textConfigurations = {
//         companyName: { 
//           x: 45, 
//           y: 232, 
//           size: 20, 
//           maxWidth: 500,  // Maximum width for company name
//           lineHeight: 24   // Line height for multi-line text
//         },
//         type: { 
//           x: 45, 
//           y: 210, 
//           size: 10, 
//           maxWidth: 500,  // Maximum width for type
//           lineHeight: 12   // Line height for multi-line text
//         },
//         address: { 
//           x: 45, 
//           y: 170, 
//           size: 10, 
//           maxWidth: 500,  // Maximum width for address
//           lineHeight: 12   // Line height for multi-line text
//         },
//         issuanceDate: { x: 60, y: 70, size: 10 },
//         version: { x: 45, y: 190, size: 10 },
//         certificateNumber: { x: 604, y: 350, size: 10 },
//         classification: { x: 604, y: 283, size: 10 },
//         validTill: { x: 604, y: 220, size: 10 }
//       };
//       // Draw company name with auto wrapping
//       const companyNameLines = this.wrapText(
//         certificateData.companyName,
//         helveticaBold,
//         textConfigurations.companyName.size,
//         textConfigurations.companyName.maxWidth
//       );
//       companyNameLines.forEach((line, index) => {
//         firstPage.drawText(line, {
//           x: textConfigurations.companyName.x,
//           y: textConfigurations.companyName.y - (index * textConfigurations.companyName.lineHeight),
//           size: textConfigurations.companyName.size,
//           font: helveticaBold,
//           color: rgb(companyNameColor.r, companyNameColor.g, companyNameColor.b),
//         });
//       });
//       // Draw type with auto wrapping
//       const typeLines = this.wrapText(
//         certificateData.type,
//         helveticaFont,
//         textConfigurations.type.size,
//         textConfigurations.type.maxWidth
//       );
//       // Adjust Y position for type based on company name lines
//       const typeYPosition = textConfigurations.type.y - 
//         (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight;
//       typeLines.forEach((line, index) => {
//         firstPage.drawText(line, {
//           x: textConfigurations.type.x,
//           y: typeYPosition - (index * textConfigurations.type.lineHeight),
//           size: textConfigurations.type.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       });
//       // Draw address with auto wrapping
//       const addressLines = this.wrapText(
//         certificateData.address,
//         helveticaFont,
//         textConfigurations.address.size,
//         textConfigurations.address.maxWidth
//       );
//       // Adjust Y position for address based on previous content
//       const totalTypeLinesHeight = (typeLines.length - 1) * textConfigurations.type.lineHeight;
//       const addressYPosition = textConfigurations.address.y - 
//         (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
//         totalTypeLinesHeight;
//       addressLines.forEach((line, index) => {
//         firstPage.drawText(line, {
//           x: textConfigurations.address.x,
//           y: addressYPosition - (index * textConfigurations.address.lineHeight),
//           size: textConfigurations.address.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       });
//       // Adjust version position based on previous content
//       const totalAddressLinesHeight = (addressLines.length - 1) * textConfigurations.address.lineHeight;
//       const versionYPosition = textConfigurations.version.y - 
//         (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
//         totalTypeLinesHeight -
//         totalAddressLinesHeight;
//       // Add other text fields (single line)
//       firstPage.drawText(certificateData.issuanceDate, {
//         x: textConfigurations.issuanceDate.x,
//         y: textConfigurations.issuanceDate.y,
//         size: textConfigurations.issuanceDate.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       firstPage.drawText(certificateData.version, {
//         x: textConfigurations.version.x,
//         y: versionYPosition,
//         size: textConfigurations.version.size,
//         font: helveticaFont,
//         color: rgb(0, 0, 0),
//       });
//       if (certificateData.certificateNumber) {
//         firstPage.drawText(certificateData.certificateNumber, {
//           x: textConfigurations.certificateNumber.x,
//           y: textConfigurations.certificateNumber.y,
//           size: textConfigurations.certificateNumber.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.classification) {
//         firstPage.drawText(certificateData.classification, {
//           x: textConfigurations.classification.x,
//           y: textConfigurations.classification.y,
//           size: textConfigurations.classification.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       if (certificateData.validTill) {
//         firstPage.drawText(certificateData.validTill, {
//           x: textConfigurations.validTill.x,
//           y: textConfigurations.validTill.y,
//           size: textConfigurations.validTill.size,
//           font: helveticaFont,
//           color: rgb(0, 0, 0),
//         });
//       }
//       // Serialize the PDF
//       const pdfBytes = await pdfDoc.save();
//       return Buffer.from(pdfBytes);
//     } catch (error) {
//       throw new Error(`Failed to modify existing certificate: ${error.message}`);
//     }
//   }
//   private async readTemplateFile(templateName: string): Promise<Buffer> {
//     try {
//       const templatePath = path.join(
//         process.cwd(),
//         'apps',
//         'auth',
//         'src',
//         'assets',
//         'certificates',
//         templateName
//       );
//       if (!fs.existsSync(templatePath)) {
//         throw new Error(`Template file not found: ${templatePath}`);
//       }
//       return fs.readFileSync(templatePath);
//     } catch (error) {
//       throw new Error(`Error reading template file: ${error.message}`);
//     }
//   }
//   // Helper method to find text positions
//   async debugTemplatePositions(templatePath: string = 'Sample1.pdf'): Promise<void> {
//     const templateBuffer = await this.readTemplateFile(templatePath);
//     const uint8Array = new Uint8Array(templateBuffer);
//     const pdfDoc = await PDFDocument.load(uint8Array);
//     console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
//     const firstPage = pdfDoc.getPages()[0];
//     const { width, height } = firstPage.getSize();
//     console.log('Page dimensions:', { width, height });
//     console.log('Use these coordinates to position your text:');
//     console.log('Top left: (0, 0)');
//     console.log('Top right: (' + width + ', 0)');
//     console.log('Bottom left: (0, ' + height + ')');
//     console.log('Bottom right: (' + width + ', ' + height + ')');
//   }
// }
const common_1 = require("@nestjs/common");
const pdf_lib_1 = require("pdf-lib");
const fs = require("fs");
const path = require("path");
let PdfServiceService = class PdfServiceService {
    // Helper method to convert hex color to RGB
    hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        const r = ((bigint >> 16) & 255) / 255;
        const g = ((bigint >> 8) & 255) / 255;
        const b = (bigint & 255) / 255;
        return { r, g, b };
    }
    // Helper method to wrap text based on maximum width
    wrapText(text, font, fontSize, maxWidth) {
        const lines = [];
        const words = text.split(' ');
        let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const testLine = currentLine + ' ' + word;
            const testWidth = font.widthOfTextAtSize(testLine, fontSize);
            if (testWidth <= maxWidth) {
                currentLine = testLine;
            }
            else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }
    // Helper method to read image file
    readImageFile(imageName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const imagePath = path.join(process.cwd(), 'apps', 'auth', 'src', 'assets', 'certificates', imageName);
                if (!fs.existsSync(imagePath)) {
                    throw new Error(`Image file not found: ${imagePath}`);
                }
                return fs.readFileSync(imagePath);
            }
            catch (error) {
                throw new Error(`Error reading image file: ${error.message}`);
            }
        });
    }
    modifyExistingCertificate(certificateData_1) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (certificateData, templatePath = 'Sample1.pdf') {
            try {
                // Read the existing PDF template
                const templateBuffer = yield this.readTemplateFile(templatePath);
                // Convert Buffer to Uint8Array
                const uint8Array = new Uint8Array(templateBuffer);
                // Load the existing PDF
                const pdfDoc = yield pdf_lib_1.PDFDocument.load(uint8Array);
                const pages = pdfDoc.getPages();
                const firstPage = pages[0];
                // Load fonts
                const helveticaFont = yield pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
                const helveticaBold = yield pdfDoc.embedFont(pdf_lib_1.StandardFonts.HelveticaBold);
                // Load and embed the signature image
                let signatureImage;
                try {
                    const signatureBuffer = yield this.readImageFile('sign.png');
                    const signatureUint8Array = new Uint8Array(signatureBuffer);
                    // Determine image type and embed accordingly
                    const imageExtension = path.extname('sign.png').toLowerCase();
                    if (imageExtension === '.png') {
                        signatureImage = yield pdfDoc.embedPng(signatureUint8Array);
                    }
                    else if (imageExtension === '.jpg' || imageExtension === '.jpeg') {
                        signatureImage = yield pdfDoc.embedJpg(signatureUint8Array);
                    }
                    else {
                        throw new Error('Unsupported image format. Only PNG and JPG are supported.');
                    }
                }
                catch (error) {
                    console.warn('Could not load signature image:', error.message);
                    signatureImage = null;
                }
                // Convert hex color to RGB
                const companyNameColor = this.hexToRgb('#3964fe');
                // Define text positions with max widths for wrapping
                const textConfigurations = {
                    companyName: {
                        x: 45,
                        y: 232,
                        size: 20,
                        maxWidth: 500,
                        lineHeight: 24
                    },
                    type: {
                        x: 45,
                        y: 210,
                        size: 10,
                        maxWidth: 500,
                        lineHeight: 12
                    },
                    address: {
                        x: 45,
                        y: 170,
                        size: 10,
                        maxWidth: 500,
                        lineHeight: 12
                    },
                    issuanceDate: { x: 60, y: 70, size: 10 },
                    version: { x: 45, y: 190, size: 10 },
                    certificateNumber: { x: 604, y: 350, size: 10 },
                    classification: { x: 604, y: 283, size: 10 },
                    validTill: { x: 604, y: 220, size: 10 }
                };
                // Signature image configuration
                const signatureConfig = {
                    x: 420, // X position (adjust as needed)
                    y: 80, // Y position (adjust as needed)
                    width: 100, // Width of the signature image
                    height: 35 // Height of the signature image (maintains aspect ratio if only width or height is specified)
                };
                // Draw signature image if available
                if (signatureImage) {
                    firstPage.drawImage(signatureImage, {
                        x: signatureConfig.x,
                        y: signatureConfig.y,
                        width: signatureConfig.width,
                        height: signatureConfig.height,
                    });
                }
                // Draw company name with auto wrapping
                const companyNameLines = this.wrapText(certificateData.companyName, helveticaBold, textConfigurations.companyName.size, textConfigurations.companyName.maxWidth);
                companyNameLines.forEach((line, index) => {
                    firstPage.drawText(line, {
                        x: textConfigurations.companyName.x,
                        y: textConfigurations.companyName.y - (index * textConfigurations.companyName.lineHeight),
                        size: textConfigurations.companyName.size,
                        font: helveticaBold,
                        color: (0, pdf_lib_1.rgb)(companyNameColor.r, companyNameColor.g, companyNameColor.b),
                    });
                });
                // Draw type with auto wrapping
                const typeLines = this.wrapText(certificateData.type, helveticaFont, textConfigurations.type.size, textConfigurations.type.maxWidth);
                // Adjust Y position for type based on company name lines
                const typeYPosition = textConfigurations.type.y -
                    (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight;
                typeLines.forEach((line, index) => {
                    firstPage.drawText(line, {
                        x: textConfigurations.type.x,
                        y: typeYPosition - (index * textConfigurations.type.lineHeight),
                        size: textConfigurations.type.size,
                        font: helveticaFont,
                        color: (0, pdf_lib_1.rgb)(0, 0, 0),
                    });
                });
                // Draw address with auto wrapping
                const addressLines = this.wrapText(certificateData.address, helveticaFont, textConfigurations.address.size, textConfigurations.address.maxWidth);
                // Adjust Y position for address based on previous content
                const totalTypeLinesHeight = (typeLines.length - 1) * textConfigurations.type.lineHeight;
                const addressYPosition = textConfigurations.address.y -
                    (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
                    totalTypeLinesHeight;
                addressLines.forEach((line, index) => {
                    firstPage.drawText(line, {
                        x: textConfigurations.address.x,
                        y: addressYPosition - (index * textConfigurations.address.lineHeight),
                        size: textConfigurations.address.size,
                        font: helveticaFont,
                        color: (0, pdf_lib_1.rgb)(0, 0, 0),
                    });
                });
                // Adjust version position based on previous content
                const totalAddressLinesHeight = (addressLines.length - 1) * textConfigurations.address.lineHeight;
                const versionYPosition = textConfigurations.version.y -
                    (companyNameLines.length - 1) * textConfigurations.companyName.lineHeight -
                    totalTypeLinesHeight -
                    totalAddressLinesHeight;
                // Add other text fields (single line)
                firstPage.drawText(certificateData.issuanceDate, {
                    x: textConfigurations.issuanceDate.x,
                    y: textConfigurations.issuanceDate.y,
                    size: textConfigurations.issuanceDate.size,
                    font: helveticaFont,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
                firstPage.drawText(certificateData.version, {
                    x: textConfigurations.version.x,
                    y: versionYPosition,
                    size: textConfigurations.version.size,
                    font: helveticaFont,
                    color: (0, pdf_lib_1.rgb)(0, 0, 0),
                });
                if (certificateData.certificateNumber) {
                    firstPage.drawText(certificateData.certificateNumber, {
                        x: textConfigurations.certificateNumber.x,
                        y: textConfigurations.certificateNumber.y,
                        size: textConfigurations.certificateNumber.size,
                        font: helveticaFont,
                        color: (0, pdf_lib_1.rgb)(0, 0, 0),
                    });
                }
                if (certificateData.classification) {
                    firstPage.drawText(certificateData.classification, {
                        x: textConfigurations.classification.x,
                        y: textConfigurations.classification.y,
                        size: textConfigurations.classification.size,
                        font: helveticaFont,
                        color: (0, pdf_lib_1.rgb)(0, 0, 0),
                    });
                }
                if (certificateData.validTill) {
                    firstPage.drawText(certificateData.validTill, {
                        x: textConfigurations.validTill.x,
                        y: textConfigurations.validTill.y,
                        size: textConfigurations.validTill.size,
                        font: helveticaFont,
                        color: (0, pdf_lib_1.rgb)(0, 0, 0),
                    });
                }
                // Serialize the PDF
                const pdfBytes = yield pdfDoc.save();
                return Buffer.from(pdfBytes);
            }
            catch (error) {
                throw new Error(`Failed to modify existing certificate: ${error.message}`);
            }
        });
    }
    readTemplateFile(templateName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const templatePath = path.join(process.cwd(), 'apps', 'auth', 'src', 'assets', 'certificates', templateName);
                if (!fs.existsSync(templatePath)) {
                    throw new Error(`Template file not found: ${templatePath}`);
                }
                return fs.readFileSync(templatePath);
            }
            catch (error) {
                throw new Error(`Error reading template file: ${error.message}`);
            }
        });
    }
    // Helper method to find text positions
    debugTemplatePositions() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (templatePath = 'Sample1.pdf') {
            const templateBuffer = yield this.readTemplateFile(templatePath);
            const uint8Array = new Uint8Array(templateBuffer);
            const pdfDoc = yield pdf_lib_1.PDFDocument.load(uint8Array);
            console.log('PDF loaded. Page count:', pdfDoc.getPages().length);
            const firstPage = pdfDoc.getPages()[0];
            const { width, height } = firstPage.getSize();
            console.log('Page dimensions:', { width, height });
            console.log('Use these coordinates to position your text:');
            console.log('Top left: (0, 0)');
            console.log('Top right: (' + width + ', 0)');
            console.log('Bottom left: (0, ' + height + ')');
            console.log('Bottom right: (' + width + ', ' + height + ')');
        });
    }
    // Helper method to debug and find optimal signature position
    debugSignaturePosition() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (templatePath = 'Sample1.pdf', signaturePath = 'sign.png') {
            const templateBuffer = yield this.readTemplateFile(templatePath);
            const uint8Array = new Uint8Array(templateBuffer);
            const pdfDoc = yield pdf_lib_1.PDFDocument.load(uint8Array);
            const firstPage = pdfDoc.getPages()[0];
            const { width, height } = firstPage.getSize();
            console.log('Page dimensions:', { width, height });
            console.log('Suggested signature positions:');
            console.log('Bottom left: (50, 100)');
            console.log('Bottom center: (' + (width / 2 - 60) + ', 100)');
            console.log('Bottom right: (' + (width - 170) + ', 100)');
            console.log('Adjust these coordinates based on your template design.');
        });
    }
};
exports.PdfServiceService = PdfServiceService;
exports.PdfServiceService = PdfServiceService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PdfServiceService);
//# sourceMappingURL=pdf-service.js.map