import Swal from "sweetalert2";
import React from "react";
import { Link } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";

const AddCoffee = () => {
  const handleaddcoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const taste = form.taste.value;
    const photo = form.photo.value;

    const newcoffe = {
      name,
      chef,
      supplier,
      category,
      details,
      taste,
      photo,
    };
    console.log(newcoffe);
    fetch("https://coffee-shop-server-rho-two.vercel.app/coffe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newcoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee added successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <h1>this add coffe section</h1>
      <Link className="font-mainfamily flex items-center gap-2 btn" to={"/"}>
        Back to home
        <IoReturnDownBack />{" "}
      </Link>
      <div className="card mx-auto bg-[#F4F3F0] w-5/12 shrink-0 border ">
        <div className="p-7">
          <h1 className="text-center text-2xl font-bold">Add New Coffee</h1>
          <p className="text-center font-thin mt-4">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleaddcoffe} className="card-body">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter new coffee name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter Chef name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter Supplier Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste "
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] text-[#331A15]">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
