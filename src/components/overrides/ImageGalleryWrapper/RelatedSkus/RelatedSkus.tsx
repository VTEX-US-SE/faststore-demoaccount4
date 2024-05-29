import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Icon,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Price,
  Input,
} from "@faststore/ui";
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice";
import { usePDP } from "@faststore/core";

import styles from "./RelatedSkus.module.scss";

const RelatedSkus = () => {
  const columns = ["Part", "Style #", "Quantity", "Unit Price"];

  const {
    data: {
      product: { relatedSkus, id },
    },
  } = usePDP();

  const popUpRef = useRef<HTMLDivElement | null>(null);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState(
    relatedSkus.items.map((item: any) => item.relatedSkus[0].quantity)
  );

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = Number(event.target.value);
    setInputValues(newInputValues);
  };

  const handleAddToCart = () => {
    const baseUrl = `https://demoaccount1.myvtex.com/checkout/cart/add/?sku=${id}&qty=1&seller=1&sc=1`
  
    const params = relatedSkus.items
      .map((item: any, index: number) => {
        const quantity = inputValues[index];
        return { relatedSkuId: item.relatedSkus[0].relatedSkuId, quantity };
      })
      .filter((sku: any) => sku.quantity !== 0)
      .map((sku: any) => `sku=${sku.relatedSkuId}&qty=${sku.quantity}&seller=1&sc=1`)
      .join('&');

    const url = `${baseUrl}${params ? `&${params}` : ''}`;
    window.location.href = url; // Redirect the user to the generated URL
  };

  useEffect(() => {
    const handleOnDismiss = (event: MouseEvent) => {
      if (!popUpRef?.current?.contains(event.target as Node)) {
        setShowPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleOnDismiss);

    return () => {
      document.removeEventListener("mousedown", handleOnDismiss);
    };
  }, []);

  useEffect(() => {
    setInputValues(
      relatedSkus.items.map((item: any) => item.relatedSkus[0].quantity)
    );
  }, [relatedSkus]);

  return (
    <>
      {relatedSkus.skuId !== '' && <div className={styles.RelatedSkus}>
        <Button variant="primary" onClick={() => setShowPopUp(!showPopUp)}>
          Bulbs and Replacement Parts for Style #{relatedSkus.skuRefId.toUpperCase()}
        </Button>
        <div data-fs-related-products-wrapper>
          {showPopUp && (
            <div>
              <div data-fs-modal-wrapper ref={popUpRef}>
                <div data-fs-modal-container>
                  <button
                    aria-label="Close"
                    onClick={() => {
                      setShowPopUp(!showPopUp);
                    }}
                  >
                    <span>CLOSE</span>
                    <Icon name="X" weight="bold" width={18} height={18} />
                  </button>
                  <div data-fs-modal-header>
                    <p data-fs-header-title>Parts & Accessories</p>
                    <p data-fs-header-description>Need Help? Call 800-782-1967</p>
                  </div>
                  <div data-fs-modal-description>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell key={column} scope="col" variant="header">
                              {column}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {relatedSkus.items.map(
                          (sku: any, i: number) => (
                            <TableRow key={sku.relatedSkus[0].relatedSkuRefId}>
                              <TableCell>
                                <img
                                  src={sku.relatedSkus[0].imageUrl}
                                  alt={sku.relatedSkus[0].name}
                                  width={70}
                                  height={70}
                                />
                                <span>{sku.relatedSkus[0].name}</span>
                              </TableCell>
                              <TableCell>{sku.relatedSkus[0].relatedSkuRefId}</TableCell>
                              <TableCell>
                                <Input
                                  type="text"
                                  value={inputValues[i] == 0 ? '' : inputValues[i]}
                                  onChange={(event) =>
                                    handleInputChange(i, event)
                                  }
                                />
                              </TableCell>
                              <TableCell>
                                <Price
                                  formatter={useFormattedPrice}
                                  value={i == 0 ? 6.99 : 9.99}
                                />
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                    <Button
                      variant="primary"
                      onClick={() => handleAddToCart()}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
              <div
                data-fs-modal-overlay
                data-fs-modal-open={!!showPopUp}
              ></div>
            </div>
          )}
        </div>
      </div>}
    </>
  );
};

export default RelatedSkus;
