"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Users, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function RequestFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    patientName: "",
    requesterName: "",
    relationship: "",
    email: "",
    phone: "",
    alternatePhone: "",
    bloodType: "",
    unitsNeeded: "",
    urgency: "",
    hospitalName: "",
    hospitalAddress: "",
    doctorName: "",
    doctorPhone: "",
    medicalCondition: "",
    additionalInfo: "",
    requiredDate: "",
    requiredTime: "",
    agreedToTerms: false,
    agreedToVerification: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Blood request submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Your blood request has been submitted successfully. We're now searching for compatible donors in your area
              and will contact you as soon as possible.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-blue-800">
                <strong>Emergency Contact:</strong> +91 9876543210 (24/7)
              </p>
            </div>
            <Button asChild className="w-full">
              <Link href="/blood-community">Back to Blood Community</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4 bg-transparent">
            <Link href="/blood-community">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blood Community
            </Link>
          </Button>
          <div className="text-center">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Blood Request Form</h1>
            <p className="text-lg text-gray-600">Request blood for medical emergency</p>
          </div>
        </div>

        {/* Emergency Notice */}
        <Card className="mb-8 border-l-4 border-l-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Emergency Blood Request</h3>
                <p className="text-red-700 text-sm">
                  For immediate emergency requirements, please call our 24/7 helpline:
                  <strong className="ml-1">+91 9876543210</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Request Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Patient Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Patient Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="patientName">Patient Name *</Label>
                    <Input
                      id="patientName"
                      type="text"
                      required
                      value={formData.patientName}
                      onChange={(e) => handleInputChange("patientName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bloodType">Required Blood Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("bloodType", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="unitsNeeded">Units Needed *</Label>
                    <Select onValueChange={(value) => handleInputChange("unitsNeeded", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select units" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Unit</SelectItem>
                        <SelectItem value="2">2 Units</SelectItem>
                        <SelectItem value="3">3 Units</SelectItem>
                        <SelectItem value="4">4 Units</SelectItem>
                        <SelectItem value="5+">5+ Units</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="urgency">Urgency Level *</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical (Within 2 hours)</SelectItem>
                        <SelectItem value="urgent">Urgent (Within 6 hours)</SelectItem>
                        <SelectItem value="moderate">Moderate (Within 24 hours)</SelectItem>
                        <SelectItem value="planned">Planned (Within 3 days)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="medicalCondition">Medical Condition/Reason *</Label>
                  <Textarea
                    id="medicalCondition"
                    required
                    value={formData.medicalCondition}
                    onChange={(e) => handleInputChange("medicalCondition", e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder="Please describe the medical condition requiring blood transfusion"
                  />
                </div>
              </div>

              {/* Requester Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Requester Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="requesterName">Your Name *</Label>
                    <Input
                      id="requesterName"
                      type="text"
                      required
                      value={formData.requesterName}
                      onChange={(e) => handleInputChange("requesterName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="relationship">Relationship to Patient *</Label>
                    <Select onValueChange={(value) => handleInputChange("relationship", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="self">Self</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="relative">Relative</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="alternatePhone">Alternate Phone Number</Label>
                    <Input
                      id="alternatePhone"
                      type="tel"
                      value={formData.alternatePhone}
                      onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Hospital Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Hospital Information</h3>
                <div>
                  <Label htmlFor="hospitalName">Hospital Name *</Label>
                  <Input
                    id="hospitalName"
                    type="text"
                    required
                    value={formData.hospitalName}
                    onChange={(e) => handleInputChange("hospitalName", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="hospitalAddress">Hospital Address *</Label>
                  <Textarea
                    id="hospitalAddress"
                    required
                    value={formData.hospitalAddress}
                    onChange={(e) => handleInputChange("hospitalAddress", e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="doctorName">Doctor Name *</Label>
                    <Input
                      id="doctorName"
                      type="text"
                      required
                      value={formData.doctorName}
                      onChange={(e) => handleInputChange("doctorName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="doctorPhone">Doctor Phone Number</Label>
                    <Input
                      id="doctorPhone"
                      type="tel"
                      value={formData.doctorPhone}
                      onChange={(e) => handleInputChange("doctorPhone", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Required Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="requiredDate">Required Date *</Label>
                    <Input
                      id="requiredDate"
                      type="date"
                      required
                      value={formData.requiredDate}
                      onChange={(e) => handleInputChange("requiredDate", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="requiredTime">Preferred Time</Label>
                    <Input
                      id="requiredTime"
                      type="time"
                      value={formData.requiredTime}
                      onChange={(e) => handleInputChange("requiredTime", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  className="mt-1"
                  rows={3}
                  placeholder="Any additional information that might help us find suitable donors"
                />
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I confirm that all information provided is accurate and I understand that this request will be
                    shared with potential blood donors for the purpose of finding compatible matches.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="verification"
                    checked={formData.agreedToVerification}
                    onCheckedChange={(checked) => handleInputChange("agreedToVerification", checked as boolean)}
                  />
                  <Label htmlFor="verification" className="text-sm leading-relaxed">
                    I agree to provide medical documentation for verification if requested and understand that NSS KMIT
                    may contact the hospital to verify this request.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  disabled={!formData.agreedToTerms || !formData.agreedToVerification}
                >
                  Submit Blood Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
