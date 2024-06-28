"use client";
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    qualifications: [],
    award: "",
    awardByWhom: "",
    cv: null,
    passportPhoto: null,
    refereeName: "",
    refereeJobTitle: "",
    refereeCompanyName: "",
    refereeEmail: "",
    refereeAddress: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => {
        if (checked) {
          return {
            ...prevState,
            qualifications: [...prevState.qualifications, value],
          };
        } else {
          return {
            ...prevState,
            qualifications: prevState.qualifications.filter(
              (qual) => qual !== value
            ),
          };
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid.";
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(formData.phoneNumber))
      formErrors.phoneNumber = "Phone number is invalid.";
    if (!formData.streetAddress.trim())
      formErrors.streetAddress = "Street address is required.";
    if (!formData.city.trim()) formErrors.city = "City is required.";
    if (!formData.state.trim())
      formErrors.state = "State/Province is required.";
    if (!formData.zipCode.trim()) formErrors.zipCode = "ZIP Code is required.";
    else if (!/^\d{5,10}$/.test(formData.zipCode))
      formErrors.zipCode = "ZIP Code is invalid.";
    if (formData.qualifications.length === 0)
      formErrors.qualifications = "At least one qualification is required.";
    if (formData.award === "YES" && !formData.awardByWhom.trim())
      formErrors.awardByWhom = "Award by whom is required.";
    if (!formData.cv) formErrors.cv = "CV upload is required.";
    if (!formData.passportPhoto)
      formErrors.passportPhoto = "Passport photo upload is required.";
    if (!formData.refereeName.trim())
      formErrors.refereeName = "Referee name is required.";
    if (!formData.refereeJobTitle.trim())
      formErrors.refereeJobTitle = "Referee job title is required.";
    if (!formData.refereeCompanyName.trim())
      formErrors.refereeCompanyName = "Referee company name is required.";
    if (!formData.refereeEmail)
      formErrors.refereeEmail = "Referee email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail))
      formErrors.refereeEmail = "Referee email is invalid.";
    if (!formData.refereeAddress.trim())
      formErrors.refereeAddress = "Referee address is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <section className=" relative" >
      <div className="bg-cyan-500 absolute inset-0 h-[110px]"></div>
      <div className="pt-[150px]">
        <div className="max-w-4xl  mb-11 mt-[150px] mx-auto p-6 bg-[#EEEEEE] shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-6">VOLUNTEER TO WORK WITH US</h2>
          <form onSubmit={handleSubmit} className="my-6">
            <div className="space-y-8 p-3 uppercase">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 text-center block w-full shadow-sm sm:text-sm h-8 border-[#A3A3A3] rounded-md"
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full shadow-sm  h-8 sm:text-sm border-[#A3A3A3] rounded-md"
                    required
                  />

                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                    className="mt-1 text-center block w-full shadow-sm sm:text-sm  h-8 border-gray-300 rounded-md"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Please enter a valid number"
                    className="mt-1 text-center block w-full shadow-sm sm:text-sm border-[#A3A3A3]  h-8 rounded-md"
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
                {errors.streetAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.streetAddress}
                  </p>
                )}
              </div>
              <div className="flex gap-4">
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    State/Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1 block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.zipCode}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Qualifications
                </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {["FSLC", "WAEC", "OND", "HND", "Bsc", "Msc", "PHD"].map(
                    (qualification) => (
                      <label
                        key={qualification}
                        className="flex items-center text-sm font-medium text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="qualification"
                          value={qualification}
                          checked={formData.qualifications.includes(
                            qualification
                          )}
                          onChange={handleChange}
                          className="mr-2 w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                        />
                        <span className=" p-2  border-gray-300 ">
                          {qualification}
                        </span>
                      </label>
                    )
                  )}
                </div>
                {errors.qualifications && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.qualifications}
                  </p>
                )}
              </div>
              <div>
                <label className="block uppercase text-sm font-medium text-gray-700">
                  award/recognitions?
                </label>
                <div className="flex gap mt-4 items-center justify-between">
                  <div className="flex gap-4">
                    <input type="checkbox" className="w-6 h-6" />
                    <label className="block uppercase text-sm font-medium ">
                      yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="uppercase font-medium text-sm  text-nowrap">
                      by whom?
                    </span>
                    <select
                      name="award"
                      value={formData.award}
                      onChange={handleChange}
                      className=" block h-8 w-[140px] shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Make a Selection</option>
                      <option value="Company">Company</option>
                      <option value="Nigeria Entity">Nigeria Entity</option>
                      <option value="Global Entity">Global Entity</option>
                    </select>
                  </div>
                </div>

                {formData.award === "YES" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mt-4">
                      If yes, by whom?
                    </label>
                    <input
                      type="text"
                      name="awardByWhom"
                      value={formData.awardByWhom}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                    {errors.awardByWhom && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.awardByWhom}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload CV
                </label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500"
                  required
                />
                {errors.cv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cv}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Passport Photo
                </label>
                <input
                  type="file"
                  name="passportPhoto"
                  accept="image/*"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500"
                  required
                />
                {errors.passportPhoto && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.passportPhoto}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Referee Name
                </label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="mt-1 block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
                {errors.refereeName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.refereeName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Referee Job Title
                </label>
                <input
                  type="text"
                  name="refereeJobTitle"
                  value={formData.refereeJobTitle}
                  onChange={handleChange}
                  className="mt-1 block h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
                {errors.refereeJobTitle && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.refereeJobTitle}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Referee Company Name
                </label>
                <input
                  type="text"
                  name="refereeCompanyName"
                  value={formData.refereeCompanyName}
                  onChange={handleChange}
                  className="mt-1 block h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
                {errors.refereeCompanyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.refereeCompanyName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Referee Email
                </label>
                <input
                  type="email"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="mt-1 block h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
                {errors.refereeEmail && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.refereeEmail}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Referee Address
                </label>
                <input
                  type="text"
                  name="refereeAddress"
                  value={formData.refereeAddress}
                  onChange={handleChange}
                  className="mt-1 block h-8 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
                {errors.refereeAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.refereeAddress}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end mt-8 mr-[100px]">
              <button
                type="submit"
                className="block w-[40%]  text-white bg-[#0A2640] hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Proceed to Attest
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
