import React, { Component } from 'react';
import NumberFormat from 'react-number-format';


class Summary extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    
    render() { 


        return ( 
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title mb-4">Summary Report</h3>
                    <table className="font-weight-bold" align="center">
                        <tr>
                            <td className="pr-3" align="right">Years to Graduate:</td>
                            <td align="left">{isNaN(this.props.semToGrad) ? "" : this.props.semToGrad}</td>
                        </tr>
                        <tr>
                            <td className="pr-3" align="right">One Year Cost:</td>
                            <td align="left"><NumberFormat value={this.props.yearTotal} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                        </tr>
                        <tr>
                            <td className="pr-3" align="right">Total Cost to Graduate:</td>
                            <td align="left"><NumberFormat value={this.props.yearTotal * this.props.semToGrad} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                        </tr>
                        <tr>
                            <td className="pr-3" align="right">Expenses to Cover:</td>
                            <td align="left"><NumberFormat value={this.props.yearRemainingCost} displayType={'text'} thousandSeparator={true} prefix={'$'}/></td>
                        </tr>
                        <tr>
                            <td className={this.props.remainingHours <= 0 ? "red pr-3" : "pr-3"} align="right">Unallocated Time in a Week:</td>
                            <td align="left">{this.props.remainingHours}</td>
                        </tr>
                    </table>

                    <h4 className="mt-4 mb-3">Helpful Tips: </h4>
                    <div className={this.props.sleepHours < 42 ? "" : "hidden"}>
                        <p>We noticed that your plan includes sleeping significantly less than recomended amount. 
                            This can have a negative effect on your ability to focus, process informaiton as well 
                            as on your phyiscal and mental health. 
                            Consider ways you can free up additional time to add sleeping time to your plan. </p>
                    </div>
                    <div className={this.props.remainingHours < 4 ? "" : "hidden"}>
                        <p>We noticed you only have very little margin in your schedule to deal with the normal 
                            "bumps in the road" that come with college. You may want to consider how you can give 
                            yourself a little more time to start with in case you need more time to meet with a professor, 
                            get some help at the math lab,
                             or advice at the writing center, or even some extra time on a group project that meets on campus. </p>
                    </div>
                    <div className={this.props.selfTime == 0 ? "" : "hidden"}>
                        <p>We noticed that your plan does not include any time for social activities or time to invest 
                            in your own mental and physical wellbeing. Consider how you might free up some time to 
                            prioritize your health while attending college.</p>
                    </div>

                    <div className={this.props.studyHours < this.props.classHours*2 ? "" : "hidden"}>
                        <p>We noticed that your plan is based on studying less than 2 hours for each hour you are in class. 
                            While every student is different, we often hear from students that they underestimate the 
                            time they would need to earn the kind of grades they want. Consider ways you can add time to
                             study and be academically successful. This might mean leveraging loans and working less, and 
                             or reducing your expenses, taking fewer credits, or cutting down on your commuting time.</p>
                    </div>

                    <div className={this.props.parking == 0 && this.props.gas > 0 ? "" : "hidden"}>
                        <p>Parking on campus can a great way to save time and reduce stress. Since you have a car, 
                            think about treating yourself to the annual cost of a parking permit, about XXX/year. 
                            We often hear students say that finding free parking near campus is much harder than 
                            they think it will be.</p>
                    </div>

                    <div className={this.props.semToGrad == 5 && this.props.tuition > 0 && this.props.income > 0 ? "" : "hidden"}>
                        <p>We see that you plan on graduating in 5 years (10 semesters). You will spend &nbsp;
                            <NumberFormat value={this.props.yearTotal} displayType={'text'} thousandSeparator={true} prefix={'$'}/> more in 
                            school costs than if you graduate in 4 years and while you will earn &nbsp;
                            <NumberFormat value={this.props.income} displayType={'text'} thousandSeparator={true} prefix={'$'}/> in working wages, 
                            we see that you will miss out on &nbsp;
                            <NumberFormat value={this.props.anticipatedSalary} displayType={'text'} thousandSeparator={true} prefix={'$'}/> &nbsp;
                            in wages in a job after graduating - a difference of &nbsp;
                            <NumberFormat value={this.props.anticipatedSalary - this.props.income} displayType={'text'} thousandSeparator={true} prefix={'$'}/>. Consider the experience and other benefits that you might realize if you were to graduate
                             sooner. Graduating sooner means taking more credits and you may need to leverage loans in order to work less. </p>
                    </div>

                    <div className={this.props.semToGrad >= 6 && this.props.tuition > 0 && this.props.income > 0 ? "" : "hidden"}>
                        <p>We see that you plan on graduating in 6+ years (12+ semesters). You will spend &nbsp;
                            <NumberFormat value={this.props.yearTotal*2} displayType={'text'} thousandSeparator={true} prefix={'$'}/> more in 
                            school costs than if you graduate in 4 years and while you will earn &nbsp;
                            <NumberFormat value={this.props.income*2} displayType={'text'} thousandSeparator={true} prefix={'$'}/> &nbsp;in working wages, 
                            we see that you will miss out on &nbsp;
                            <NumberFormat value={this.props.anticipatedSalary*2} displayType={'text'} thousandSeparator={true} prefix={'$'}/>&nbsp;
                            in wages in a job after graduating - a difference of &nbsp;
                            <NumberFormat value={(this.props.anticipatedSalary*2) - (this.props.income*2)} displayType={'text'} thousandSeparator={true} prefix={'$'}/>. Consider the experience and other benefits that you might realize if you were to graduate
                             sooner. Graduating sooner means taking more credits and you may need to leverage loans in order to work less. </p>
                    </div>


                </div>
            </div>
         );
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}
 
export default Summary;