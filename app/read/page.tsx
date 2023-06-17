import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="page read">
      <p>
        In the assessment of all types of cases, items to be considered include:
        (1) medical bills under the new Mo.Rev.Stat. § 490.715; and (2) venue
        under the new Mo.Rev.Stat. § 508.010.
      </p>
      <p>
        With respect to medical bills under the new Mo.Rev.Stat. § 490.715
        (attached), the language of this (relatively) new statute essentially
        allows for the possibility that a trial court can decide the amount of
        medical expenses which will be submitted to the jury for consideration.
        Among the factors that the trial court can consider are: (a) The medical
        bills incurred by a party; (b) The amount actually paid for medical
        treatment rendered to a party; (c) The amount or estimate of the amount
        of medical bills not paid which such party is obligated to pay to any
        entity in the event of a recovery.
      </p>
      <p>
        Not surprisingly, the plaintiffs’ side generally favors submitting the
        medical bills “incurred” by a party, and the defendants’ side generally
        favors submitting the amount “actually paid” for medical treatment. The
        trial courts in Missouri’s Judicial Circuits are replete with
        conflicting decisions about the intent and application of this statute,
        and even some judges within a particular circuit have conflicting
        decisions. There has been little caselaw to aid in the construction of
        this statute, although suffice it to say from the plaintiffs’ side that
        this statute does not unilaterally require a trial court to submit the
        amount actually paid for medical treatment. See Klotz v. St. Anthony’s
        Medical Center, No. SC90107 (March 23, 2010) and Berra v. Danter, No.
        ED92279 (October 27, 2009). In the investigation phase, two things to
        consider with respect to this statute are: (1) whether there is a
        significant discrepancy between the amount of bills your client has
        incurred versus the amount actually paid (usually by insurance
        companies), such that this could be the source of dispute at trial; and
        (2) whether the judges in the likely venue for the case have already
        ruled on this issue.
      </p>
    </div>
  );
};

export default page;
