import { Role } from './authentication/userConstants';

export const RoleCreationMatrix: Record<Role, Role[]> = {
  [Role.SUPER_ADMIN]: [Role.ADMIN, Role.CLIENT],
  [Role.ADMIN]: [Role.AUDITOR, Role.REVIEWER, Role.VERIFIER, Role.CLIENT],
  [Role.AUDITOR]: [],
  [Role.REVIEWER]: [],
  [Role.VERIFIER]: [],
  [Role.CLIENT]: [Role.CLIENT_ADMIN, Role.CLIENT_ANALYST, Role.CLIENT_AUDITOR, Role.CLIENT_REVIEWER],
  [Role.CLIENT_ADMIN]: [],
  [Role.CLIENT_ANALYST]: [],
  [Role.CLIENT_AUDITOR]: [],
  [Role.CLIENT_REVIEWER]: [],
};