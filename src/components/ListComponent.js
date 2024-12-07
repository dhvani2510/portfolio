const ListComponent = (props) => {

    return (
      <a className="experience-block" href={props.item.link} target="_blank" rel="noopener noreferrer">
        {props.item.preview && props.item.preview !== "" ? (
          <div className="experience-block-left">
            {props.item.preview.endsWith(".mp4") ? (
              <video src={props.item.preview} autoPlay loop muted />
            ) : (
              <img src={props.item.preview} alt={props.item.title} />
            )}
          </div>
          ) : (
            <div className="experience-block-left">{props.item.startDate} - {props.item.endDate}</div>
          )
        }
        <div className="experience-block-right">
          <div className="experience-block-right-title">
            {props.item.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="experience-block-right-subTitle"></div>
          <div className="experience-block-right-summary">
            {props.item.subTitle}
          </div>
          {/* check if porops.item has technologies field */}
          {props.item.technologies && (
            <div
            className="experience-block-right-technologies"
            aria-label="technologies-used"
          >
            {/* map through technologies field */}
            {props.item.technologies.map((tech, index) => (
              <div className="experience-block-right-technologies-tag" key={index}>
                {tech}
              </div>
            ))}
          </div>
        )}
        </div>
      </a>
    );
}

export default ListComponent;