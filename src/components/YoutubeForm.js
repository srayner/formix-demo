import React from "react";

function YoutubeForm(props) {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="name" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
