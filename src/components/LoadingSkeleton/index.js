import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card } from "react-bootstrap";
const LoadingSkeleton = () => {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-baseline justify-content-around">
        <Card>
          <Skeleton width={250} height={275} />
          <Skeleton width={125} height={15} />
          <Skeleton width={200} height={15} />
          <Skeleton width={250} height={10} count={4} />
          <Skeleton width={250} height={25} />
        </Card>
        <Card>
          <Skeleton width={250} height={300} />
          <Skeleton width={125} height={15} />
          <Skeleton width={200} height={15} />
          <Skeleton width={250} height={10} count={4} />
          <Skeleton width={250} height={25} />
        </Card>
        <Card>
          <Skeleton width={250} height={300} />
          <Skeleton width={125} height={15} />
          <Skeleton width={200} height={15} />
          <Skeleton width={250} height={10} count={4} />
          <Skeleton width={250} height={25} />
        </Card>
        <Card>
          <Skeleton width={250} height={300} />
          <Skeleton width={125} height={15} />
          <Skeleton width={200} height={15} />
          <Skeleton width={250} height={10} count={4} />
          <Skeleton width={250} height={25} />
        </Card>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
