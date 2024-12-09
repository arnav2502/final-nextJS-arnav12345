"use client"

import { useState } from 'react'
import { ChevronDown, Share, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ProfileData {
  insurance: {
    personalInfo: {
      fullName: string
      dateOfBirth: string
      contactInfo: string
      emergencyContacts: string
    }
    identificationDocuments: string
    policyTypes: string
    beneficiaryInfo: string
    claimHistory: string
  }
  healthcare: {
    personalInfo: {
      demographics: string
      contactInfo: string
      emergencyContacts: string
    }
    medicalHistory: string
    currentMedications: string
    immunizationRecords: string
    diagnosticReports: string
    lifestyleInfo: string
    doctorVisits: string
  }
}

export default function DataStoragePage() {
  const [loading, setLoading] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    insurance: {
      personalInfo: {
        fullName: "Jane Doe",
        dateOfBirth: "1990-01-01",
        contactInfo: "123-456-7890, jane@example.com, 123 Main St",
        emergencyContacts: "John Doe: 987-654-3210"
      },
      identificationDocuments: "Driver's License: ABC123, Passport: XYZ789",
      policyTypes: "Health Insurance, Life Insurance",
      beneficiaryInfo: "John Doe (Spouse), Sarah Doe (Daughter)",
      claimHistory: "No recent claims"
    },
    healthcare: {
      personalInfo: {
        demographics: "Female, 33 years old",
        contactInfo: "123-456-7890, jane@example.com",
        emergencyContacts: "John Doe: 987-654-3210"
      },
      medicalHistory: "No major medical conditions",
      currentMedications: "Vitamin D supplement",
      immunizationRecords: "Flu shot (2023), COVID-19 vaccine (2022)",
      diagnosticReports: "Annual checkup (2023): All clear",
      lifestyleInfo: "Regular exercise, balanced diet",
      doctorVisits: "Last visit: Annual checkup (2023)"
    }
  })
  const [newProfile, setNewProfile] = useState<ProfileData | null>(null)

  const handleInputChange = (section: keyof ProfileData, field: string, subfield: string | null, value: string) => {
    setProfileData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: subfield 
          ? { ...prevData[section][field as keyof typeof prevData[typeof section]], [subfield]: value }
          : value
      }
    }))
  }

  const handleUpdate = async (section: 'insurance' | 'healthcare') => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success(`${section.charAt(0).toUpperCase() + section.slice(1)} profile updated successfully`)
    } catch (error) {
      toast.error(`Failed to update ${section} profile`)
    } finally {
      setLoading(false)
    }
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Profile Information',
        text: 'Check out my profile information',
      })
    } catch (error) {
      toast.error("Failed to share profile")
    }
  }

  const handleAddProfile = () => {
    setNewProfile({
      insurance: {
        personalInfo: {
          fullName: "",
          dateOfBirth: "",
          contactInfo: "",
          emergencyContacts: ""
        },
        identificationDocuments: "",
        policyTypes: "",
        beneficiaryInfo: "",
        claimHistory: ""
      },
      healthcare: {
        personalInfo: {
          demographics: "",
          contactInfo: "",
          emergencyContacts: ""
        },
        medicalHistory: "",
        currentMedications: "",
        immunizationRecords: "",
        diagnosticReports: "",
        lifestyleInfo: "",
        doctorVisits: ""
      }
    })
  }

  const renderEditableField = (section: keyof ProfileData, field: string, subfield: string | null, label: string) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {subfield ? (
        <Input
          value={profileData[section][field as keyof typeof profileData[typeof section]][subfield]}
          onChange={(e) => handleInputChange(section, field, subfield, e.target.value)}
          className="w-full"
        />
      ) : (
        <Textarea
          value={profileData[section][field as keyof typeof profileData[typeof section]] as string}
          onChange={(e) => handleInputChange(section, field, null, e.target.value)}
          className="w-full"
        />
      )}
    </div>
  )

  return (
    <div className="space-y-6">
      <Button 
        onClick={handleAddProfile}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white"
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add Profile
      </Button>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Insurance Profile */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-blue-600">Insurance Profile</h2>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="personal-info">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Personal Information
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('insurance', 'personalInfo', 'fullName', 'Full Name')}
                  {renderEditableField('insurance', 'personalInfo', 'dateOfBirth', 'Date of Birth')}
                  {renderEditableField('insurance', 'personalInfo', 'contactInfo', 'Contact Information')}
                  {renderEditableField('insurance', 'personalInfo', 'emergencyContacts', 'Emergency Contacts')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="identification">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Identification Documents
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('insurance', 'identificationDocuments', null, 'Identification Documents')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="policy-types">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Insurance Policy Types
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('insurance', 'policyTypes', null, 'Policy Types')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="beneficiary">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Beneficiary Information
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('insurance', 'beneficiaryInfo', null, 'Beneficiary Information')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="claim-history">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Claim History
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('insurance', 'claimHistory', null, 'Claim History')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex gap-4 mt-6">
              <Button 
                className="bg-green-700 hover:bg-green-800 text-white px-6"
                onClick={() => handleUpdate('insurance')}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </Button>
              <Button 
                variant="outline" 
                className="border-green-700 text-green-700 hover:bg-green-50 px-6"
                onClick={handleShare}
              >
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Healthcare Profile */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-blue-600">Healthcare Profile</h2>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="personal-info">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Personal Information
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('healthcare', 'personalInfo', 'demographics', 'Demographics')}
                  {renderEditableField('healthcare', 'personalInfo', 'contactInfo', 'Contact Information')}
                  {renderEditableField('healthcare', 'personalInfo', 'emergencyContacts', 'Emergency Contacts')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="medical-history">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Medical History
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('healthcare', 'medicalHistory', null, 'Medical History')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="current-medications">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Current Medications
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('healthcare', 'currentMedications', null, 'Current Medications')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="immunization">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Immunization Records
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('healthcare', 'immunizationRecords', null, 'Immunization Records')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="diagnostic">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Diagnostic Reports
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('healthcare', 'diagnosticReports', null, 'Diagnostic Reports')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="lifestyle">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Lifestyle Information
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('healthcare', 'lifestyleInfo', null, 'Lifestyle Information')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="doctor-visits">
                <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                  Doctor Visits
                </AccordionTrigger>
                <AccordionContent>
                  {renderEditableField('healthcare', 'doctorVisits', null, 'Doctor Visits')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex gap-4 mt-6">
              <Button 
                className="bg-green-700 hover:bg-green-800 text-white px-6"
                onClick={() => handleUpdate('healthcare')}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </Button>
              <Button 
                variant="outline" 
                className="border-green-700 text-green-700 hover:bg-green-50 px-6"
                onClick={handleShare}
              >
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {newProfile && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">New Profile</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Insurance Profile */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <h3 className="text-lg font-semibold">Insurance Profile</h3>
              </CardHeader>
              <CardContent>
                {renderEditableField('insurance', 'personalInfo', 'fullName', 'Full Name')}
                {renderEditableField('insurance', 'personalInfo', 'dateOfBirth', 'Date of Birth')}
                {renderEditableField('insurance', 'personalInfo', 'contactInfo', 'Contact Information')}
                {renderEditableField('insurance', 'personalInfo', 'emergencyContacts', 'Emergency Contacts')}
                {renderEditableField('insurance', 'identificationDocuments', null, 'Identification Documents')}
                {renderEditableField('insurance', 'policyTypes', null, 'Policy Types')}
                {renderEditableField('insurance', 'beneficiaryInfo', null, 'Beneficiary Information')}
                {renderEditableField('insurance', 'claimHistory', null, 'Claim History')}
              </CardContent>
            </Card>
            {/* Healthcare Profile */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <h3 className="text-lg font-semibold">Healthcare Profile</h3>
              </CardHeader>
              <CardContent>
                {renderEditableField('healthcare', 'personalInfo', 'demographics', 'Demographics')}
                {renderEditableField('healthcare', 'personalInfo', 'contactInfo', 'Contact Information')}
                {renderEditableField('healthcare', 'personalInfo', 'emergencyContacts', 'Emergency Contacts')}
                {renderEditableField('healthcare', 'medicalHistory', null, 'Medical History')}
                {renderEditableField('healthcare', 'currentMedications', null, 'Current Medications')}
                {renderEditableField('healthcare', 'immunizationRecords', null, 'Immunization Records')}
                {renderEditableField('healthcare', 'diagnosticReports', null, 'Diagnostic Reports')}
                {renderEditableField('healthcare', 'lifestyleInfo', null, 'Lifestyle Information')}
                {renderEditableField('healthcare', 'doctorVisits', null, 'Doctor Visits')}
              </CardContent>
            </Card>
          </div>
          <Button 
            onClick={() => {
              setProfileData(prevData => ({...prevData, ...newProfile}))
              setNewProfile(null)
              toast.success('New profile added successfully')
            }}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white"
          >
            Save New Profile
          </Button>
        </div>
      )}
    </div>
  )
}

