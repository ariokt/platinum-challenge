import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card } from "react-bootstrap";
const LoadingSkeleton = (panjangMobil) => {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-baseline justify-content-around ">
        <Card>
          <Skeleton width={250} height={300} />
          <Skeleton width={250} height={10} count={5} />
        </Card>
        <Card>
          <Skeleton width={250} height={300} />
          <Skeleton width={250} height={10} count={5} />
        </Card>
        <Card>
          <Skeleton width={250} height={300} />
          <Skeleton width={250} height={10} count={5} />
        </Card>
        <Card>
          <Skeleton width={250} height={300} />
          <Skeleton width={250} height={10} count={5} />
        </Card>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
