import { React } from "react";
import { GoCloudDownload } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { MdTimer, MdBloodtype, MdModeEditOutline } from "react-icons/md";
import { SlChemistry } from "react-icons/sl";
import { BsCalendar } from "react-icons/bs";
import { VscPerson } from "react-icons/vsc";
import { GiWeightScale, GiMedicalThermometer, GiLungs } from "react-icons/gi";
import { RiHeartPulseFill, RiMedicineBottleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPatientsById } from "../../store/features/patient/patientSlice";
import "./PatientDetail.css";

const PatientDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatientsById(id));
  }, [dispatch, id]);

  const navigate = useNavigate();

  const patientHistoryCondition = () => {
    navigate(`/patient/history`);
  };

  const editDataPatient = () => {
    navigate(`/patient/edit`);
  };

  return (
    <>
      <div className="patient-detail-page">
        <div>
          <h5 className="patient-title" style={{ marginLeft: "20px" }}>
            Patient Detail
          </h5>
          <div className="button-patient-detail">
            <button
              onClick={patientHistoryCondition}
              className="download-button"
            >
              <GoCloudDownload
                style={{
                  marginRight: "15px",
                  height: "19px",
                  width: "15px",
                }}
              />
              Download
            </button>
            <button className="edit-button" onClick={editDataPatient}>
              <MdModeEditOutline
                style={{
                  marginRight: "15px",
                  height: "19px",
                  width: "15px",
                }}
              />
              Edit
            </button>
          </div>
        </div>

        <div>
          <div className="patient-information container text-center">
            <div className="row">
              <p className="patient-information-title text-start">
                Patient Information
              </p>

              <div className="col-6 col-sm-4 text-start">
                <p className="label-patient-information">Full Name</p>
                <span className="field-patient-information">
                  {patient.data.name}
                </span>

                <p className="label-patient-information">Gender</p>
                <span className="field-patient-information">
                  {patient.data.gender}
                </span>

                <p className="label-patient-information">Street Address</p>
                <span className="field-patient-information">
                  {patient.data.address}
                </span>

                <p className="label-patient-information">Phone Number</p>
                <span className="field-patient-information">
                  {patient.data.phone_num}
                </span>
              </div>

              <div className="col-6 col-sm-4 text-start">
                <p className="label-patient-information">No. Medical Record</p>
                <span className="field-patient-information">
                  {patient.data.id}
                </span>

                <p className="label-patient-information">Place of Birth</p>
                <span className="field-patient-information">
                  {patient.data.pob}
                </span>

                <p className="label-patient-information">City</p>
                <span className="field-patient-information">
                  {patient.data.city}
                </span>

                <p className="label-patient-information">Email</p>
                <span className="field-patient-information">
                  {patient.data.email}
                </span>
              </div>

              <div className="col-6 col-sm-4 text-start">
                <p className="label-patient-information">Status</p>
                <span className="field-patient-information">
                  {patient.data.status}
                </span>

                <p className="label-patient-information">Date of Birth</p>
                <span className="field-patient-information">
                  {patient.data.DOB}
                </span>

                <p className="label-patient-information">Province</p>
                <span className="field-patient-information">
                  {patient.data.province}
                </span>

                <p className="label-patient-information">Family Contact</p>
                <span className="field-patient-information">
                  {patient.data.family_contact}
                </span>
              </div>
            </div>
          </div>

          <div className="appointment-schedule container text-center">
            <p className="patient-information-title text-start">
              Appointment Schedule
            </p>

            <div className="row justify-content-evenly">
              <div className="col-4">
                <BsCalendar className="icon-patient-detail" />
                <br />
                <span className="label-appointment-schedule">Date</span>
                <br />
                <span className="field-appointment-schedule">
                  Tuesday, Nov 2, 2022
                </span>
              </div>

              <div className="col-4">
                <MdTimer className="icon-patient-detail" />
                <br />
                <span className="label-appointment-schedule">Time</span>
                <br />
                <span className="field-appointment-schedule">
                  01.00 PM - 01.30 PM
                </span>
              </div>
            </div>
          </div>

          <div>
            <p
              style={{ marginTop: "15px" }}
              className="history-condition-title text-start"
            >
              Select History Condition
            </p>
            <Form.Select className="select-history">
              <option>Open this select menu</option>
              <option value="1">Saturday, Nov 10.2022</option>
              <option value="2">Saturday, Nov 10.2022</option>
              <option value="3">Saturday, Nov 10.2022</option>
            </Form.Select>
          </div>

          <div className="medical-record container text-center">
            <p className="patient-information-title text-start">
              Medical Record
            </p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div className="col">
                <VscPerson className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Height</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">150 </span>
                  cm
                </span>
              </div>

              <div className="col">
                <GiWeightScale className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Weight</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">54 </span>kg
                </span>
              </div>

              <div className="col">
                <MdBloodtype className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Blood Pressure</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">180/180 </span>mmHg
                </span>
              </div>

              <div className="col">
                <SlChemistry className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Sugar Analysis</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">110 </span>mg/dL
                </span>
              </div>
            </div>

            <div
              style={{ marginTop: "40px" }}
              className="row row-cols-1 row-cols-sm-2 row-cols-md-4"
            >
              <div className="col">
                <GiMedicalThermometer className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Body Temperature</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">39.5 </span>°C
                </span>
              </div>

              <div className="col">
                <RiHeartPulseFill className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Heart Rate</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">80 </span>bpm
                </span>
              </div>

              <div className="col">
                <GiLungs className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Breath Rate</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">16 </span>/rpm
                </span>
              </div>

              <div className="col">
                <RiMedicineBottleFill className="icons-medical-record" />
                <br />
                <span className="label-medical-record">Cholesterol</span>
                <br />
                <span className="field-medical-record">
                  <span className="number-medical-record">150 </span>/mg/dL
                </span>
              </div>
            </div>
          </div>

          <div className="medical-diagnose container text-start">
            <p className="medical-diagnose-title text-start">
              Medical Diagnose
            </p>
            <p className="date-diagnose">10/11/2022</p>
            <p className="medical-diagnose-title">Dr. Baiq N.N</p>

            <div>
              <p className="diagnose-title">Diagnose</p>
              <div className="diagnose text-start">
                <span>
                  After examination, the results of the medical record showed
                  that the patient had symptoms of the disease, namely redness
                  of the throat, enlarged salivary glands and mild respiratory
                  distress.
                </span>
              </div>
            </div>

            <div>
              <p className="presciption-title">Presciption</p>
              <div className="presciption text-start">
                <span>
                  <ul>
                    <li>Paracetamol 50 mg</li>
                    <li>Ibuprofen 150 mg</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetail;
