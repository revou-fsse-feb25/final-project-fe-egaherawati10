import { patientProfiles } from "./mockPatientProfile";
import { mockUsers } from "./mockUsers";

export const mockPatientWithUser = patientProfiles.map((profile) => {
  const user = mockUsers.find((u) => u.id === profile.userId)!;
  return {
    ...profile,
    user,
  };
});
