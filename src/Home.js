import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import Table from "./Table";

const Home = ({ list, setListData }) => {
  const [index, setIndex] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editData, setEditData] = useState({
    activity: "",
    type: "",
    participants: "",
    price: "",
    link: "",
    key: "",
    accessibility: ""
  });

  const deleteHandler = (props) => {
    console.log("deleting");
    Swal.fire({
      title: "Are you sure?",
      //text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        var newList = list.filter((item, index) => index !== props.row.index);
        setListData(newList);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    // list.findIndex((item, index)=>)
  };

  const onChangeHandler = (e) => {
    setEditData((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
    console.log("------------=======--------", editData);
  };
  const SubmitHandler = () => {
    list[index] = editData;
    setModalIsOpen(false);
  };

  const editHandler = (item) => {
    console.log("props......", item.original);
    setEditData(item.original);
    setIndex(item.index);
    setModalIsOpen(true);
  };

  const columns = [
    {
      Header: "Activity",
      accessor: "activity"
    },
    {
      Header: "Type",
      accessor: "type"
    },
    {
      Header: "Participants",
      accessor: "participants"
    },
    {
      Header: "Price",
      accessor: "price"
    },
    {
      Header: "Key",
      accessor: "key"
    },
    {
      Header: "Accessibility",
      accessor: "accessibility"
    },
    {
      Header: "Action",
      Cell: (props) => (
        <div>
          <button onClick={() => editHandler(props.row)}>edit</button>
          <button onClick={() => deleteHandler(props)}>Delete</button>
        </div>
      )
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <Table columns={columns} data={list} />
          <Modal isOpen={modalIsOpen}>
            <form onSubmit={SubmitHandler}>
              <div class="form-group row">
                <label for="inputActivity" className="col-sm-2 col-form-label">
                  Activity
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputActivity"
                    name="activity"
                    value={editData.activity}
                    onChange={onChangeHandler}
                    placeholder="Activity"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputType" className="col-sm-2 col-form-label">
                  Type
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputType"
                    onChange={onChangeHandler}
                    name="type"
                    value={editData.type}
                    placeholder="activity type"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputParticipants"
                  className="col-sm-2 col-form-label"
                >
                  Participants
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputParticipants"
                    onChange={onChangeHandler}
                    name="participants"
                    value={editData.participants}
                    placeholder="participants"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPrice" class="col-sm-2 col-form-label">
                  Price
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPrice"
                    onChange={onChangeHandler}
                    name="price"
                    value={editData.price}
                    placeholder="price"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputLink" class="col-sm-2 col-form-label">
                  Link
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputLink"
                    onChange={onChangeHandler}
                    name="link"
                    value={editData.link}
                    placeholder="link"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputkey" class="col-sm-2 col-form-label">
                  Key
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputkey"
                    onChange={onChangeHandler}
                    name="key"
                    value={editData.key}
                    placeholder="key"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputAccess" class="col-sm-2 col-form-label">
                  Accessibility
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAccess"
                    onChange={onChangeHandler}
                    name="accessibility"
                    value={editData.accessibility}
                    placeholder="acceessibility"
                  />
                </div>
              </div>
              <button className="btn btn-success" type="submit">
                Submit{" "}
              </button>
            </form>
          </Modal>
          ;
        </div>
      </div>
    </div>
  );
};
export default Home;
