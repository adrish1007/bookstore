const Modal = ({ close, name, img, price }) => {
  return (
    <div className="Background">
      <div className="MContainer">
        <div>
          <img
            src={img}
            width="100px"
            alt=""
            height="150px"
          />
        </div>
        <h2>{name}</h2>
        <h4>Product-Code: 110234533</h4>
        <h4>Publisher: Picasos</h4>
        <h2>Rs.{price} (including shipping charges)</h2>
        <h4>Warranty-6 months</h4>
        <button onClick={() => close(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
