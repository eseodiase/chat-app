const Form = () => {
  return (
    <form className="get_started">
      <div className="price">
        <div className="txt">
          <input type="radio" className="radio" name="price" value="$29" />
          <span className="cir"></span>

          <label>30 minute walk</label>
        </div>

        <div className="fig">
          <p>$29</p>
        </div>
      </div>

      <div className="price">
        <div className="txt">
          <input type="radio" className="radio" name="price" value="$49" />
          <span className="cir"></span>

          <label>1 hour walk</label>
        </div>

        <div className="fig" id="fig-2">
          <p>$49</p>
        </div>
      </div>

      <input type="text" className="msg" placeholder="type a message..." />

      <button type="submit">
        <b>&rsaquo;</b>
      </button>
    </form>
  );
};

export default Form;
