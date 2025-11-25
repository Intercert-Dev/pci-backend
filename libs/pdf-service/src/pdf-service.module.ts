import { Module } from '@nestjs/common';
import { PdfServiceService } from './lib/pdf-service';

@Module({
  providers: [PdfServiceService],
  exports: [PdfServiceService],
})
export class PdfServiceModule {}