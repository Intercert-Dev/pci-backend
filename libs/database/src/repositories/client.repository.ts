import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Client } from "../entities";
import { Role } from '../../../constants/authentication/userConstants';
import { ERROR_CODES } from "../../../constants/commonConstants";
import {IClient} from 'libs/interfaces/authentication/client.interface';

@Injectable()
export class ClientRepositoryService {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>,
    ) {}

    async createClient(createClient: IClient,userdata:any): Promise<Client> {
        try {
            const newClient = this.clientRepository.create({
               legal_entity_name: createClient.legal_entity_name,
               trading_name: createClient.trading_name,
               county_name: createClient.county_name,
               state_name: createClient.state_name,
               city_name: createClient.city_name,
               street_name: createClient.street_name,
               zip_name: createClient.zip_name,
               nature_of_business: createClient.nature_of_business,
               website_domain_url: createClient.website_domain_url,
               type_of_business: createClient.type_of_business,
               contact_name: createClient.contact_name,
               designation: createClient.designation,
               contact_email: createClient.contact_email,
               phone: createClient.phone,
               technical_contacts: createClient.technical_contacts,
               information_security_officer: createClient.information_security_officer,
               client_signoff_authority: createClient.client_signoff_authority,
               assessment_project_name: createClient.assessment_project_name,
                assessment_type: createClient.assessment_type,
                assessment_category: createClient.assessment_category,
                assessment_year: createClient.assessment_year,
                pci_dss_version_application: createClient.pci_dss_version_application,
                assessment_period_covered: createClient.assessment_period_covered,
                audit_start_date: createClient.audit_start_date,
                audit_end_date: createClient.audit_end_date,
                date_of_report_submission: createClient.date_of_report_submission,
                audit_status: createClient.audit_status,
                certificate_issue_date: createClient.certificate_issue_date,
                certificate_expiry_date: createClient.certificate_expiry_date,
                certificate_number_unique_id: createClient.certificate_number_unique_id,
                next_audit_due_date: createClient.next_audit_due_date,
                name_of_qsa: createClient.name_of_qsa,
                qsa_license_certificate_number: createClient.qsa_license_certificate_number,
                audit_manager_reviewer_name: createClient.audit_manager_reviewer_name,
                scope_of_assessment: createClient.scope_of_assessment,
                location_of_scope: createClient.location_of_scope,
                overall_compliance_status: createClient.overall_compliance_status,
                compensating_controls_used: createClient.compensating_controls_used,
                customized_approach_used: createClient.customized_approach_used,
                non_conformities_gap: createClient.non_conformities_gap,
                non_conformities_gap_identified: createClient.non_conformities_gap_identified,
                remediation_target_date: createClient.remediation_target_date,
                revalidation_date: createClient.revalidation_date,
                createdBy: userdata.user_id,
            });
            return await this.clientRepository.save(newClient);
        } catch (error) {
            console.error("Error in createClient: ", error);
            throw error;
        }
    }

    async getAllClients(): Promise<Client[]> {
        try {
            return await this.clientRepository.find();
        } catch (error) {
            console.error("Error in getAllClients: ", error);
            throw error;
        }
    }


}