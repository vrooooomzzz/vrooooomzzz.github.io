import { Box, Text } from "@chakra-ui/react";

type BusinessDetailListProps = {
  details: readonly string[];
  testIdPrefix: "business-education" | "business-experience";
};

const splitLeadingLabel = (detail: string) => {
  const separatorIndex = detail.indexOf(":");

  if (separatorIndex < 1) {
    return { label: undefined, value: detail };
  }

  return {
    label: detail.slice(0, separatorIndex + 1),
    value: detail.slice(separatorIndex + 1).trimStart(),
  };
};

function BusinessDetailList({
  details,
  testIdPrefix,
}: BusinessDetailListProps) {
  return (
    <Box as="ul" className="business-detail-list">
      {details.map((detail, index) => {
        const { label, value } = splitLeadingLabel(detail);

        return (
          <Box
            as="li"
            key={detail}
            className="business-detail-item"
            aria-label={detail}
            data-testid={`${testIdPrefix}-detail-${index}`}
          >
            <Text as="span" className="business-detail-copy">
              {label ? (
                <Text as="strong" className="business-detail-label">
                  {label}
                </Text>
              ) : null}
              <Text as="span" className="business-detail-value">
                {value}
              </Text>
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

export default BusinessDetailList;
