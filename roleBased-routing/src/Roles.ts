type Role= keyof typeof ROLES
type Permission =(typeof ROLES)
const ROLES = {
    admin: ["view:comment", "create:comment", "update:comment", "delete:comment"],
    moderator: ["view:comment", "create:comment", "delete:comment"],
    user: ["view:comment", "create:comment"],
  } as const; // Ensures ROLES is a readonly object
  
  export function hasPermission(
    user: { id: string | number; role: keyof typeof ROLES }, 
    permission: Permission
  ): boolean {
    return (ROLES[user.role] as readonly Permission[]).includes(permission)
  }
  