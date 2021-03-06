import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const tableData = [
  {
    name: "Tiger Nixon",
    ref: "A-00098",
    reg_no: "00001",
    nic: "968798657v",
    startDate: "2011/04/25",
    phone_number: "704-993-5435",
    branch: "colombo"
  },
  {
    name: "Garrett Winters",
    ref: "A-00099",
    reg_no: "00002",
    nic: "987604356v",
    startDate: "2011/07/25",
    phone_number: "704-993-5435",
    branch: "colombo"
  },
  {
    name: "Ashton Cox",
    ref: "A-00100",
    reg_no: "00003",
    nic: "897643986v",
    startDate: "2009/01/12",
    phone_number: "704-993-5435",
    branch: "colombo"
  },
  {
    name: "Cedric Kelly",
    ref: "A-00101",
    reg_no: "00004",
    nic: "917608435v",
    startDate: "2012/03/29",
    phone_number: "704-993-5435",
    branch: "colombo"
  },
  {
    name: "Airi Satou",
    ref: "A-00102",
    reg_no: "00005",
    nic: "887643986v",
    startDate: "2008/11/28",
    phone_number: "704 - 993 - 5435",
    branch: "colombo"
  }
];

const tableColumns = [
  {
    dataField: "name",
    text: "Name",
    sort: true
  },
  {
    dataField: "ref",
    text: "Ref",
    sort: true
  },
  {
    dataField: "reg_no",
    text: "Reg No",
    sort: true
  },
  {
    dataField: "nic",
    text: "NIC",
    sort: true
  },
  // {
  //   dataField: "startDate",
  //   text: "Start Date",
  //   sort: true
  // },
  //   {
  //     dataField: "phone_number",
  //     text: "Phone number",
  //     sort: true
  //   },
  //   {
  //     dataField: "branch",
  //     text: "Branch",
  //     sort: true
  //   },
  {
    dataField: "action",
    text: "Action",
    sort: false,
    formatter: actionFormatter,
    headerStyle: (colum, colIndex) => {
      return { width: "25%", textAlign: "left" };
    }
  }
];

function actionFormatter(cell, row, rowIndex, formatExtraData) {
  return (
    <div>
      <Link to="">
        <span className="mr-4 mb-1">Add Result</span>
      </Link>
      <Link to="">
        <span className=" mb-1">Edit</span>
      </Link>
    </div>
  );
}

class CustomerExams extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exam_date: new Date(),
      exam_time: new Date()
    };
  }

  toggle = () => {
    this.setState(state => ({
      index: !state.index
    }));
  };

  componentWillMount() {
    this.setState(() => ({
      index: false
    }));
  }

  setExamDate = date => {
    this.setState({
      exam_date: date
    });
  };

  setExamTime = date => {
    this.setState({
      exam_time: date
    });
  };

  rowEvents = {
    onClick: (e, row, rowIndex) => {}
  };
  render() {
    return (
      <Card>
        <ToolkitProvider
          keyField="name"
          data={tableData}
          columns={tableColumns}
          exportCSV
        >
          {props => (
            <div>
              <CardHeader className="pt-4 pl-4 pb-1">
                <CardTitle tag="h5">Exams and Trials</CardTitle>
              </CardHeader>
              <CardBody>
                <BootstrapTable
                  responsive
                  striped
                  hover
                  {...props.baseProps}
                  bootstrap4
                  bordered={false}
                  rowEvents={this.rowEvents}
                  pagination={paginationFactory({
                    sizePerPage: 5,
                    sizePerPageList: [5, 10, 25, 50]
                  })}
                />
              </CardBody>
            </div>
          )}
        </ToolkitProvider>
      </Card>
    );
  }
}

export default withRouter(CustomerExams);
