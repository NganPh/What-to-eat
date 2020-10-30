import React from "react";
import Image from "react-bootstrap/Image";

const RecipeDetails = () => {
  return (
    <div className="d-flex w-100 h-100 justify-content-center align-items-center">
      <div>
        <div className="d-flex justify-content-center">
          <Image src="//unsplash.it/500/300" />
        </div>
        <h2 align="center">This is my awesome recipe</h2>
        <div className="d-flex w-100 h-100 justify-content-center">
          <div className="w-50">
            <p>
              Proin ex purus, luctus in sollicitudin sed, consectetur sit amet
              magna. Cras aliquam fringilla nisi, eu sodales nunc viverra et.
              Mauris eu lobortis tellus. Aliquam mattis tincidunt aliquam. Fusce
              varius pulvinar libero ornare dictum. Etiam eget mi a dui blandit
              malesuada. Maecenas consequat justo nec lacus malesuada suscipit.
              Nunc venenatis risus eu vehicula volutpat. Curabitur dictum ante
              sit amet pulvinar iaculis. Donec venenatis augue nec elit sodales,
              nec efficitur justo condimentum. Proin ex purus, luctus in
              sollicitudin sed, consectetur sit amet magna. Cras aliquam
              fringilla nisi, eu sodales nunc viverra et. Mauris eu lobortis
              tellus. Aliquam mattis tincidunt aliquam. Fusce varius pulvinar
              libero ornare dictum. Etiam eget mi a dui blandit malesuada.
              Maecenas consequat justo nec lacus malesuada suscipit. Nunc
              venenatis risus eu vehicula volutpat. Curabitur dictum ante sit
              amet pulvinar iaculis. Donec venenatis augue nec elit sodales, nec
              efficitur justo condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
