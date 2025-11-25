export interface IUpdateClient {
  createdBy?: string;
  legal_entity_name?: string;
  trading_name?: string;
  county_name?: string;
  state_name?: string;
  city_name?: string;
  street_name?: string;
  zip_name?: string;
  nature_of_business?: string;
  website_domain_url?: string;
  type_of_business?: string;

  contact_name?: string;
  designation?: string;
  contact_email?: string;
  phone?: string;
  technical_contacts?: string;
  information_security_officer?: string;
  client_signoff_authority?: string;

  assessment_project_name?: string;
  assessment_type?: string;
  assessment_category?: string;
  assessment_year?: string;
  pci_dss_version_application?: string;
  assessment_period_covered?: string;
  audit_start_date?: string;
  audit_end_date?: string;
  date_of_report_submission?: string;
  audit_status?: string;

  certificate_issue_date?: string;
  certificate_expiry_date?: string;
  certificate_number_unique_id?: string;
  next_audit_due_date?: string;
  name_of_qsa?: string;
  qsa_license_certificate_number?: string;
  audit_manager_reviewer_name?: string;

  scope_of_assessment?: string;
  location_of_scope?: string;
  overall_compliance_status?: string;
  compensating_controls_used?: string;
  customized_approach_used?: string;
  non_conformities_gap?: string;
  non_conformities_gap_identified?: string;

  remediation_target_date?: string;
  revalidation_date?: string;
}
