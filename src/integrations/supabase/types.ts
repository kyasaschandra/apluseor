export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      approvals: {
        Row: {
          approver_user_id: string
          comment: string | null
          created_at: string
          decided_at: string | null
          decision: Database["public"]["Enums"]["approval_decision"] | null
          id: string
          level: number
          object_id: string
          object_type: string
          updated_at: string
        }
        Insert: {
          approver_user_id: string
          comment?: string | null
          created_at?: string
          decided_at?: string | null
          decision?: Database["public"]["Enums"]["approval_decision"] | null
          id?: string
          level?: number
          object_id: string
          object_type: string
          updated_at?: string
        }
        Update: {
          approver_user_id?: string
          comment?: string | null
          created_at?: string
          decided_at?: string | null
          decision?: Database["public"]["Enums"]["approval_decision"] | null
          id?: string
          level?: number
          object_id?: string
          object_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          base_currency: string | null
          billing_email: string | null
          country: string
          created_at: string
          ein_cin: string | null
          id: string
          legal_name: string
          settings: Json | null
          updated_at: string
        }
        Insert: {
          base_currency?: string | null
          billing_email?: string | null
          country: string
          created_at?: string
          ein_cin?: string | null
          id?: string
          legal_name: string
          settings?: Json | null
          updated_at?: string
        }
        Update: {
          base_currency?: string | null
          billing_email?: string | null
          country?: string
          created_at?: string
          ein_cin?: string | null
          id?: string
          legal_name?: string
          settings?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      employees: {
        Row: {
          bank_vault_token: string | null
          company_id: string
          country: string
          created_at: string
          employee_type: Database["public"]["Enums"]["employee_type"]
          end_date: string | null
          id: string
          start_date: string | null
          status: string | null
          tax_meta: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          bank_vault_token?: string | null
          company_id: string
          country: string
          created_at?: string
          employee_type: Database["public"]["Enums"]["employee_type"]
          end_date?: string | null
          id?: string
          start_date?: string | null
          status?: string | null
          tax_meta?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          bank_vault_token?: string | null
          company_id?: string
          country?: string
          created_at?: string
          employee_type?: Database["public"]["Enums"]["employee_type"]
          end_date?: string | null
          id?: string
          start_date?: string | null
          status?: string | null
          tax_meta?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "employees_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      expense_lines: {
        Row: {
          amount: number
          category: string
          created_at: string
          description: string | null
          expense_date: string
          expense_id: string
          gl_code: string | null
          id: string
          receipt_url: string | null
          tax_code: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          description?: string | null
          expense_date: string
          expense_id: string
          gl_code?: string | null
          id?: string
          receipt_url?: string | null
          tax_code?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          description?: string | null
          expense_date?: string
          expense_id?: string
          gl_code?: string | null
          id?: string
          receipt_url?: string | null
          tax_code?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "expense_lines_expense_id_fkey"
            columns: ["expense_id"]
            isOneToOne: false
            referencedRelation: "expenses"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          created_at: string
          currency: string | null
          employee_id: string
          id: string
          status: Database["public"]["Enums"]["expense_status"] | null
          submitted_at: string | null
          total_amount: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string | null
          employee_id: string
          id?: string
          status?: Database["public"]["Enums"]["expense_status"] | null
          submitted_at?: string | null
          total_amount?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string | null
          employee_id?: string
          id?: string
          status?: Database["public"]["Enums"]["expense_status"] | null
          submitted_at?: string | null
          total_amount?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "expenses_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      timesheet_entries: {
        Row: {
          created_at: string
          hours: number
          id: string
          notes: string | null
          overtime_hours: number | null
          project: string | null
          task: string | null
          timesheet_id: string
          updated_at: string
          work_date: string
        }
        Insert: {
          created_at?: string
          hours: number
          id?: string
          notes?: string | null
          overtime_hours?: number | null
          project?: string | null
          task?: string | null
          timesheet_id: string
          updated_at?: string
          work_date: string
        }
        Update: {
          created_at?: string
          hours?: number
          id?: string
          notes?: string | null
          overtime_hours?: number | null
          project?: string | null
          task?: string | null
          timesheet_id?: string
          updated_at?: string
          work_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "timesheet_entries_timesheet_id_fkey"
            columns: ["timesheet_id"]
            isOneToOne: false
            referencedRelation: "timesheets"
            referencedColumns: ["id"]
          },
        ]
      }
      timesheets: {
        Row: {
          created_at: string
          employee_id: string
          id: string
          period_end: string
          period_start: string
          status: Database["public"]["Enums"]["timesheet_status"] | null
          submitted_at: string | null
          total_hours: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          employee_id: string
          id?: string
          period_end: string
          period_start: string
          status?: Database["public"]["Enums"]["timesheet_status"] | null
          submitted_at?: string | null
          total_hours?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          employee_id?: string
          id?: string
          period_end?: string
          period_start?: string
          status?: Database["public"]["Enums"]["timesheet_status"] | null
          submitted_at?: string | null
          total_hours?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "timesheets_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: { user_uuid: string }
        Returns: boolean
      }
      update_timesheet_total_hours: {
        Args: { timesheet_id: string }
        Returns: undefined
      }
    }
    Enums: {
      approval_decision: "PENDING" | "APPROVED" | "REJECTED"
      employee_type: "FT" | "CTR"
      expense_status:
        | "DRAFT"
        | "SUBMITTED"
        | "MANAGER_APPROVED"
        | "FINANCE_APPROVED"
        | "SCHEDULED_FOR_PAYMENT"
        | "PAID"
      invoice_status:
        | "DRAFT"
        | "ISSUED"
        | "SENT"
        | "PARTIALLY_PAID"
        | "PAID"
        | "CLOSED"
      timesheet_status:
        | "DRAFT"
        | "SUBMITTED"
        | "MANAGER_APPROVED"
        | "FINANCE_APPROVED"
        | "LOCKED"
        | "PAID"
        | "PROCESSED"
      user_role: "EMPLOYEE" | "COMPANY" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      approval_decision: ["PENDING", "APPROVED", "REJECTED"],
      employee_type: ["FT", "CTR"],
      expense_status: [
        "DRAFT",
        "SUBMITTED",
        "MANAGER_APPROVED",
        "FINANCE_APPROVED",
        "SCHEDULED_FOR_PAYMENT",
        "PAID",
      ],
      invoice_status: [
        "DRAFT",
        "ISSUED",
        "SENT",
        "PARTIALLY_PAID",
        "PAID",
        "CLOSED",
      ],
      timesheet_status: [
        "DRAFT",
        "SUBMITTED",
        "MANAGER_APPROVED",
        "FINANCE_APPROVED",
        "LOCKED",
        "PAID",
        "PROCESSED",
      ],
      user_role: ["EMPLOYEE", "COMPANY", "ADMIN"],
    },
  },
} as const
