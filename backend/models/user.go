package model

type StudentDetails struct {
	ApplicationNumber  string `json:"applicationnumber" bson:"applicationnumber"`
	Name               string `json:"name" bson:"name"`
	Email              string `json:"email" bson:"email"`
	Phone              string `json:"phone" bson:"phone"`
	Dob                string `json:"dob" bson:"dob"`
	Gender             string `json:"gender" bson:"gender"`
	Address            string `json:"address" bson:"address"`
	StudentId          string `json:"studentid" bson:"studentid"`
	Course             string `json:"course" bson:"course"`
	Branch             string `json:"branch" bson:"branch"`
	Year               string `json:"year" bson:"year"`
	CGPA               string `json:"cgpa" bson:"cgpa"`
	EAMCETRank         string `json:"eamcetrank" bson:"eamcetrank"`
	University         string `json:"university" bson:"university"`
	ParentName         string `json:"parentname" bson:"parentname"`
	ParentOccupation   string `json:"parentoccupation" bson:"parentoccupation"`
	AnnualFamilyIncome string `json:"annualfamilyincome" bson:"annualfamilyincome"`
	LoanAmountRequired string `json:"loanamountrequired" bson:"loanamountrequired"`
	PurposeOfLoan      string `json:"purposeofloan" bson:"purposeofloan"`
	Status             string `json:"status" bson:"status"`
}

type ApplicationStats struct {
	TotalApplications int `json:"totalapplications"`
	Pending           int `json:"pending"`
	Approved          int `json:"approved"`
	Rejected          int `json:"rejected"`
}
