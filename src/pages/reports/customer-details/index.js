import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  Col,
  Container,
  Button,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  CardHeader,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import CustomerDetailsWizard from "./CustomerDetailsWizard";
import CustomerDetailsLesson from "./CustomerDetailsLesson";
import CustomerDetailsLessonDelete from "./CustomerDetailsLessonDelete";
import CustomerDetailsPayment from "./CustomerDetailsPayment";
import CustomerDetailsExam from "./CustomerDetailsExam";
import CustomerDetailsTrails from "./CustomerDetailsTrails";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ApexCharts extends React.Component {
  state = {
    startDate: null,
    endDate: null
  };

  setStartDate = date => {
    this.setState({
      startDate: date
    });
  };

  setEndDate = date => {
    this.setState({
      endDate: date
    });
  };
  componentDidUpdate() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }

  render() {
    return (
      <Container fluid className="p-0">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/customers">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active> Report</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h1 className="h3 mb-3">Customer Details</h1>

        <Card>
          <CardHeader>
            <CardTitle tag="h5">Customer Details filter(s)</CardTitle>
            <hr />
          </CardHeader>
          <CardBody>
            <UncontrolledButtonDropdown className="ml-3">
              <DropdownToggle caret outline color="secondary">
                Select Customer{" "}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Out Customer Trial</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown className="ml-3">
              <DropdownToggle caret outline color="secondary">
                NIC{" "}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Out Customer Trial</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown className="ml-3">
              <DropdownToggle caret outline color="secondary">
                Mobile{" "}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Out Customer Trial</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <Row className="float-right pull-right">
              <FormGroup className="mr-3 mb-0">
                <DateRangePicker
                  small={true}
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
              </FormGroup>
              <div>
                <Button
                  type="submit"
                  color="primary"
                  className="mr-2 mb-1"
                  outline
                >
                  Search
                </Button>

                <Button color="secondary" className="mr-1 mb-1" outline>
                  Reset
                </Button>
              </div>
            </Row>
          </CardBody>
        </Card>

        <Row>
          <Col lg="8">
            <CustomerDetailsWizard variant="default" color="primary" />
            <CustomerDetailsLesson />
            <CustomerDetailsLessonDelete />
          </Col>
          <Col lg="4">
            <CustomerDetailsPayment />
            <CustomerDetailsExam />
            <CustomerDetailsTrails />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(store => ({
  theme: store.theme.currentTheme
}))(ApexCharts);
